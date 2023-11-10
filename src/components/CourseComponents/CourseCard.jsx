import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  image_url,
  description,
  coursename,
  instructor,
  course_price,
  card,
  onCardClick,
}) => {
  return (
    <>
      <div className="four wide column">
        <div className="ui card" onClick={() => onCardClick(card)}>
          <img src={image_url} alt="" className="ui image rounded" />
          <div className="content">
            <h1 className="Second header">{coursename}</h1>

            <p className="Fifth header">
              Instructor: <span className="ui header">{instructor}</span>
            </p>

            <p className="description">
              <i className="ri-book-open-line"></i> {description}{" "}
            </p>

            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price: <span className="header">{course_price}</span>
            </h4>

            <button className="ui primary basic button">
              See More <i className="arrow right icon"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
