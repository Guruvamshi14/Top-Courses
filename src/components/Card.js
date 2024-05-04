import React from 'react';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';




const Card = (courses) => {

    let course = courses.courses;
    let likedCourses = courses.likedCourses;
    let setLikedCourses = courses.setLikedCourses;

    function clickHandler(){

        if(likedCourses.includes(course.id)){

            const upd = prev.filter((cid) => (cid != course.id));
    
            setLikedCourses(upd);

            toast.warning("Like Removed");
    
        }else{
    
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("Like Added");
        }
    }

   

  return (
    <div className='w-[300px] bg-slate-700 '>
        <div className='relative'>
            <img src={courses.courses.image.url}></img>

            <div className=' w-[30px] h-[30px] absolute right-1 bg-white bottom-0 rounded-full flex justify-center align-middle'>

                <button onClick={clickHandler}>
                    {
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.6rem"/>) : (<FcLikePlaceholder />)
                    }
                </button>

            </div>
        </div>

        <div>
            <div className='text-white text-bold m-2'>{courses.courses.title}</div>
            <div className='mt-2 text-white m-2'>
            {
            courses.courses.description.length > 100 ? (courses.courses.description.substr(0,100) + '...') : (courses.courses.description)
            }
            </div>
        </div>

    </div>
  )
}

export default Card;
