import React from 'react';
import { useState } from 'react';
import Card from './Card';

const Cards = (props) => {

    const[likedCourses,setLikedCourses] = useState([]);

    let courses = props.courses;

    let category = props.category;


    function getCourses(){
    

        // if(category != "All")

        if(category == "All"){
            let allCourses = [];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        
        return courses[category];

    }

   


  return (
    <div className='flex w-10/12 flex-wrap gap-3 justify-center'>
        {
            getCourses().map((courses) =>{
                return <Card courses={courses}
                likedCourses = {likedCourses}
                setLikedCourses = {setLikedCourses}
                />;
            })
        }
    </div>
  )
}

export default Cards;