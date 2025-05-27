import React from "react";
import { Timeline } from "./ui/Timeline";
import { workExperienceData } from '../app/data/workExperienceData';

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20">

      <h1 className="heading">
        My&nbsp;
        <span className="text-purple-300">Work Experience</span>
      </h1>

    <Timeline data={workExperienceData}/>
    </section>
  );
};

export default WorkExperience;
