import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      AboutPage
      <Link href={"/about2"}>about2로 이동</Link>
    </div>
  );
};

export default About;
