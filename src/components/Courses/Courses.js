import React, { useEffect, useState } from 'react';
import Course from '../../components/Course/Course'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    
    return (
        <div className='w-75 mx-auto'>
            <h2 className='fs-xl text-center my-5 text-red-800 underline underline-offset-4'>Available Courses </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;