import React from "react";

const SectionHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <h1 className="text-2xl tracking lg:text-3xl xl:text-4xl capitalize pb-8 font-semibold text-center">
      {children}
    </h1>
  );
};

export default SectionHeader;
