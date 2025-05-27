import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[
          {title: "Title 1", description: "Description 1"},
        //   {title: "Title 1", description: "Description 1"},
        //   {title: "Title 1", description: "Description 1"},
        ].map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            // header={<div className="text-lg font-bold">Header {index + 1}</div>}
            // icon={<span className="text-2xl">🌟</span>}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
