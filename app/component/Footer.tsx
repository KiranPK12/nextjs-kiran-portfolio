import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">&copy; 2023 Kiran. All rights reserved</small>
      <p className="text-sm">
        <span className="font-bold">
          About this website : {" "}
        </span>
        Built with React & Next JS , TypeScript , Tailwind CSS , Framer motion
      </p>
    </footer>
  );
};

export default Footer;
