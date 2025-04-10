"use client";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeader from "./common/section-header";
import { experience } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";

const Experience = () => {
  const { inView, ref } = useInView({
    threshold: 0.7,
    rootMargin: "-10% 0px", // Makes detection a bit more aggressive
    triggerOnce: false,
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("experience");
    }
  }, [inView, setActiveSection]);
  return (
    <div
      ref={ref}
      className=" scroll-mt-[6rem] pb-10 lg:pb-14 mt-4"
      id="experience"
    >
      <SectionHeader>Experience 🚀</SectionHeader>
      <VerticalTimeline lineColor="">
        {experience.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#0e0e0e",
                border: "1px solid #9ca3af",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9ca3af",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{ background: "black", fontSize: "1.5rem" }}
            >
              <h3 className="font-semibold capitalize text-foreground text-lg ">
                {exp.title}
              </h3>
              <h4 className="text-muted-foreground">{exp.location}</h4>
              <p className="!text-sm leading-6  text-foreground">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
