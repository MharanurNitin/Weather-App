import React,{useRef,useState,useEffect} from 'react'
import {useRecoilState} from "recoil";
import {searchResult} from "../recoil"
import "./Search.css";
function Search() {
    const InputRef=useRef("");
    const [SearchInput,setSearchInput]=useState('');
    const [data,setData]=useRecoilState(searchResult);
    const [submit,setSubmit]=useState(false)
    const [loading,setLoading]=useState(false)
    function handleSubmitSearch(e){
      e.preventDefault();
      setSearchInput(InputRef.current.value);
      setLoading(!loading)
    //   setSubmit(!submit)
    }
    
    useEffect(()=>{
        if(SearchInput){
            setTimeout(() => {
              fetch(
                `https://api.weatherapi.com/v1/current.json?key=43254a67363744c1b7154715231502&q=${SearchInput}&aqi=no`
              )
                .then((response) => response.json())
                .then((res) => {
                  res.current && setData([res, ...data]);
                });
            },500);
       setTimeout(() => {
        setLoading(!loading);
       },1000);
       
        }
    },[SearchInput])
  return (
    <div className='SearchContainer'>
        <form onSubmit={handleSubmitSearch}>
            <input type="text"  ref={InputRef} placeholder="Search"/>
       </form>
       {loading&&<h2 style={{color:"white",textAlign:"center"}}>loading...</h2>}
    </div>
  )
}

export default Search