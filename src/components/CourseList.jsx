import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ course }) {
  return (
    <>
      <div className="ui relaxed grid">
        {course.map((single) => {
          return <CourseCard key={single.id} {...single} />;
        })}
      </div>
    </>
  );
}

export default CourseList;
