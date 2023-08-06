import React from "react";

interface SectionHeaderProps {
  label: string;
}

const SectionHeader:React.FC<SectionHeaderProps> = ({label}:SectionHeaderProps) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        {label}
    </h2>
  );
};

export default SectionHeader;
