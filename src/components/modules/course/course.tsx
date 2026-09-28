import React from 'react';
import CourseFilters from './course-filters';
import CourseCardContainer from './course-card-container';

const CourseSection = () => {
    return (
        <div className='mt-16'>
            <div>
                <h1 className='font-semibold text-5xl max-w-2xl mx-auto text-center text-gray-900'>Discover Your Passion, Build Your Skills</h1>
                <p className='mt-6 text-lg font-light text-center text-gray-400'>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br /> fields, from technology to the arts, and make a difference in your career and life.</p>
            </div>

            <CourseFilters/>
            <CourseCardContainer/>
            
        </div>
    );
};

export default CourseSection;