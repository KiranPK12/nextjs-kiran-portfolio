"use client";
import React from "react";
import SectionHeader from "./Section/SectionHeader";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const contactFormSchema = z.object({
  email: z.string().email(),
  message: z.string().max(200).min(10,"Minimum 10 Characters Required"),
});

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: FieldValues) =>
    await axios.post("/api/mail", data).then(function (response) {
      console.log(response);
    });
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      <SectionHeader label="Contact Me" />
      <p className="text-gray-700 -mt-4 dark:text-white/80">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:kiranpadma2003@gmail.com">
          kiranpadma2003@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          placeholder="Your Email"
          className="h-14 rounded-lg border border-black/10 px-4 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
        />
        {errors.email && (
          <p className="text-red-500 text-left pt-3 pl-5">
            {errors.email.message?.toString()}
          </p>
        )}
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          {...register("message")}
          placeholder="Your Message"
        />
        {errors.message && (
          <p className="text-red-500 text-left pt-3 pl-5 pb-5">
            {errors.message.message?.toString()}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className=" group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-3 hover:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
