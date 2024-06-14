import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "../../components/Banner";
import CourseCard from "../../components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const bestCourse = courses
    .filter((course) => course.rating >= 4.9)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  return (
    <div>
      <Banner />
      <div className="mx-10">
        <h1 className="text-4xl mt-16 mb-10">Top Rated Courses</h1>
        <div className="grid grid-cols-3 gap-5">
          {bestCourse.map((course, idx) => (
            <CourseCard course={course} key={idx} />
          ))}
        </div>
      </div>
      <div className="mx-10">
        <h1 className="text-4xl mt-16 mb-10">Latest Courses</h1>
        <div className="grid grid-cols-3 gap-5">
          {courses
            .slice(courses.length - 6, courses.length)
            .map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
