import React from "react";
const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((el, index) => {
        return (
          <img
            key={index}
            src={el.img}
            style={{ width: "200px", margin: "10px" }}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
