import React, { useState } from "react";
import CourseCard from "./CourseCard";
import NavBar from "../LandingPage/NavBar";
import Search from "./Search";
import { Link } from "react-router-dom";

function CourseList({ course }) {
  const [selectedCard, setSelectedCard] = useState();
  const [query, setQuery] = useState("");

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEnroll = () => {
    alert(`Thank you for enroll wish you the best with your course`);
  };

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <NavBar />
      <div className="ui container" style={{ marginTop: "2em" }}>
        <Search handleSearch={handleSearch} />
        {selectedCard ? (
          <div>
            <Link to="/courses">
              <i className="arrow left icon"></i>
            </Link>
            <div className="ui container" style={{ marginTop: "10em" }}>
              <h2 className="Second header">{selectedCard.coursename}</h2>
              <img
                src={selectedCard.image_url}
                alt=""
                className="ui medium rounded image"
              />
              <h3 className="Third header">
                Instructor: {selectedCard.instructor}
              </h3>
              <h4 className="Fourth header">{selectedCard.course_details}</h4>
              <h5 className="Fifth header">
                Price: {selectedCard.course_price}
              </h5>
              <button
                className="ui primary basic button"
                onClick={handleEnroll}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ) : (
          <div className="ui relaxed grid" style={{ marginTop: "2em" }}>
            {course.map((single) => {
              return (
                <CourseCard
                  key={single.id}
                  {...single}
                  card={single}
                  onCardClick={handleCardClick}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CourseList;
