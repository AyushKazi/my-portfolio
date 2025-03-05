import React from "react";

const Section = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-28 ">
      {children}
    </div>
  );
};

export default Section;
