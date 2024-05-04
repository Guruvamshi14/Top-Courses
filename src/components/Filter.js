import React from 'react';

const Filter = (props) => {

  let category = props.category;


  function clickHandler(title){
    props.setCategory(title);
    // console.log("jebvk");
  }
    

  return (
    <div className="w-10/12 flex flex-wrap space-x-4 mx-auto justify-center ">
      {
        // console.log(props.filterData)
        props.filterData.map((data) => {
          return(<button className={`text-lg  py-0.5 px-1 m-2 text-white hover:bg-opacity-50 border-2 bg-black border-black
          ${
            category === data.title ? "bg-opacity-50 border-white" : "border-black"
          }
          `}
          key={data.id}  onClick={()=>{clickHandler(data.title)}} >{data.title}</button>);
        })
      }
    </div>
  )
}

export default Filter;
