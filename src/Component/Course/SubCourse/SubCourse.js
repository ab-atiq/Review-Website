import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
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
            <h1>Total Course: {courses.length}</h1>
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
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Course Name: {title} </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Title>Teacher Name: {teacher} </Card.Title>
                <Card.Title>Course Fee: $ {fee} </Card.Title> 
                <Button variant='info'>Buy Course</Button>
            </Card.Body>
        </Card>
    );
}

export default SubCourse;