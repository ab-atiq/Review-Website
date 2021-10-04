import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import SubCourse from './SubCourse/SubCourse';

const Course = () => {
    return (
        <div>
            <Header></Header>
            <div className="course-container">
                <SubCourse></SubCourse>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Course;