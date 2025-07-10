import React from 'react';
import { useParams } from 'react-router-dom';
import courses from "../../data/coursesData";
import styles from './CourseProfile.module.css';

function CourseProfile() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{course.title}</h1>
      <p className={styles.detail}><strong>Description:</strong> {course.description}</p>
      <p className={styles.detail}><strong>Duration:</strong> {course.duration}</p>
      <p className={styles.detail}><strong>Price:</strong> {course.price}</p>
      <p className={styles.detail}><strong>Level:</strong> {course.level}</p>
      <p className={styles.detail}><strong>Mode:</strong> {course.mode}</p>
    </div>
  );
}

export default CourseProfile;
