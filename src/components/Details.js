import React from 'react'
import "./Details.css"
import { useRecoilState } from "recoil";
import { searchResult } from "../recoil";
function Details() {
   const [data, setData] = useRecoilState(searchResult);
   const { current, location } = data;
   let icon;
   let temp;
   let feelslike;
   if(data.current){
    icon = "https:" + current.condition?.icon;
    temp=current.temp_c
    feelslike=current.feelslike_c;
   }
  return (
    <div className="flex">
      {data.length > 0 &&
        data.map((el) => (
          <div className="box">
            <h2>{el?.location?.name}</h2>
            <h5>{el?.location?.country}</h5>
            <div className="temp">
              {console.log(data)}
              <img src={el.current.condition.icon} />
              <span className="currenttemp">{el.current.temp_c}<sup>o</sup>C</span>
            </div>
            <h3>feelsLike {el.current.feelslike_c}</h3>
          </div>
        ))}
    </div>
  );
}

export default Details