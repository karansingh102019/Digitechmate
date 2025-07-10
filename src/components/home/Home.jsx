import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import courses from "../../data/coursesData";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>New Courses Are Available</h1>
      <ul className={styles.courseList}>
         {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/CourseProfile/${course.id}`}>{course.title}</Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default Home;
