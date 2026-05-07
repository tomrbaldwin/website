import React from "react";
import "./SectionHeading.css";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return <h2 className="section-heading">{title}</h2>;
};

export default SectionHeading;
