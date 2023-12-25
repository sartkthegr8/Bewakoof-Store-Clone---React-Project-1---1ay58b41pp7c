import { useState } from "react";
import dataObject from "../utils/dataApi";
import ClothCard from "./ClothCard";


const Body =()=>{

    const[list,setList]=useState(dataObject);

    return(
      <div className="body">
        {/* <div className="filter">
          <button
          className="filter-btn"
          onClick={()=>{
            // let filterList = list.filter((res) => res.ratings > 3);
            // setList(filterList);
          }}
          >Top Rated            
          </button>
        </div> */}
        <div className="search">SearchBar</div>
        <div className="cloth-container">
  
            {   
                dataObject.data.map(cloth => <ClothCard key={cloth._id} dData={cloth}/>)
            }
  
            {/* <ClothCard dData={dataObject.data[0]} />
            <ClothCard dData={dataObject.data[1]} />
            <ClothCard dData={dataObject.data[2]} />
            <ClothCard dData={dataObject.data[3]} />
            <ClothCard dData={dataObject.data[4]} />
            <ClothCard dData={dataObject.data[5]} /> */}
  
            {/* <ClothCard 
                cardName="Men's pyjamas"
                cardRating="4.1"
            />
            <ClothCard
                cardName="Men's pants"
                cardRating="3.9"
            /> */}
  
        </div>
      </div>
    )
  }

  export default Body;