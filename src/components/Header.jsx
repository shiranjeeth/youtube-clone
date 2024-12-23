import React, { useEffect, useState } from 'react';
import Hamburger from '../assets/images/hamburger.jpg';
import Logo from '../assets/images/Logo.png';
import UserIcon from '../assets/images/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/store/Slice/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/store/Constants';
import { cacheResults } from '../utils/store/Slice/searchSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestion,setSugessition] = useState([])
  const [showSuggestion,setShowSuggestion] = useState(false)
  const searchCache = useSelector((store)=>store.search)

  const getSearchSuggestions = async () => {
    try {
      console.log("API Call -"+ searchQuery)
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json(); 
      const suggestedData = json && json[1] ? json[1] : [];
      setSugessition(suggestedData)
      dispatch(cacheResults({
        [searchQuery] : json
      }))
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };
  
 

  function toggleMenuHandler(){
     dispatch(toggleMenu())
  }

  useEffect(()=>{
   const searchTimer = setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSugessition(searchCache[searchQuery])
    }
    getSearchSuggestions()
    },200)
   
    return ()=>{
      clearTimeout(searchTimer)
    }
  },[searchQuery])

  return (
      <div className="grid grid-cols-12 p-5 m-2 shadow-lg">
        {/* Left section with hamburger and logo */}
        <div className="flex col-span-2 justify-between items-center">
          <div className="h-auto w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 cursor-pointer" onClick={toggleMenuHandler}>
            <img src={Hamburger} alt="menu" className="w-full h-auto" />
          </div>
          <div className="h-auto w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36">
        <img src={Logo} alt="logo" className="w-full h-auto" />
      </div>
        </div>

        {/* Search bar in the center */}
        <div className="col-span-8 text-center flex items-center justify-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
        
          <button className="px-4 py-2 bg-red-700 text-white rounded-r-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-300">
            Search
          </button>
        </div>
        {/* Render search suggestions below the search bar */}
        {showSuggestion && suggestion.length > 0 && (
            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-12 w-1/2 bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto z-10">
              {suggestion.map((s, index) => (
                <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer" key={index}>
                  {s}
                </li>
              ))}
            </ul>
          )}
    
        {/* Right section with user icon */}
        <div className="h-auto w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 col-span-2 flex justify-center items-center">
          <img src={UserIcon} alt="user-icon" className="w-8 h-auto" />
        </div>
      </div>
  );
};

export default Header;
