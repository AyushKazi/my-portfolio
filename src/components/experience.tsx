"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeader from "./common/section-header";
import { experience } from "@/lib/data";

const Experience = () => {
  return (
    <div className=" scroll-mt-[5rem] pb-10 lg:pb-14 mt-4" id="experience">
      <SectionHeader>Experience 🚀</SectionHeader>
      <VerticalTimeline lineColor="">
        {experience.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f3f4f6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9ca3af",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
            >
              <h3 className="font-semibold capitalize ">{exp.title}</h3>
              <h4 className="">{exp.location}</h4>
              <p className="!text-sm leading-6  text-gray-600">
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
