import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData,apiUrl} from "./data";
import { useState,useEffect } from "react";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => { 

  const[courses,setCourses] = useState({});
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);

  useEffect(() =>{

    // console.log("Hai");

    setLoading(true);

    const fetchData = async() =>{

      

      try{
        const res = await fetch(apiUrl);
        const outcome = await res.json();
        setCourses(outcome.data);
      }
      catch{
        toast.error("Something went wrong");
      }
    }

    fetchData();

    setLoading(false);


  },[]);


  return (
    <div className="bg-[#8b8c89]  h-screen">
      <div>
      <Navbar/>
      </div>

      <div className="bg-[#8b8c89]">

      <Filter
      filterData = {filterData}
      category  = {category}
      setCategory = {setCategory}
      />

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
        }
      </div>


      </div>


      
      
    </div>
  );
};

export default App;
