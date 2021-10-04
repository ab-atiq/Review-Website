import React, { useEffect, useState } from 'react';
import './SubCourse.css';
const SubCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/Course.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <h1>Course length: {courses.length}</h1>
            <div className="courses">
                {
                    courses.map(course => <AllCourse key={course.id} course={course}></AllCourse>)
                }
            </div>
        </div>
    );
};

const AllCourse = (props) => {
    const { image, teacher, title, fee } = props.course;
    return (
        <div className="course">
            <img style={{ width: '200px' }} src={image} alt="" />
            <h2>Course:{title}</h2>
            <h4>Teacher: {teacher}</h4>
            <h4>Fee: {fee}</h4>
        </div>
    );
}

export default SubCourse;