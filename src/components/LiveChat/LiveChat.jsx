import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../../utils/store/Slice/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, getQuote } from '../../utils/store/helper'

const LiveChat = () => {
  const dispatch = useDispatch()
  const [liveMessage,setLiveMessage] = useState("")
  const chatMessages = useSelector(store => store.chat.messages)
  useEffect(()=>{
   const i = setInterval(()=>{
        // console.log("Api polling")
    /// fetch the api 
    /// convert into json 
    /// add them here
    const randomIndex = Math.floor(Math.random() * 10);
        dispatch(
        addMessage({
          name : generateRandomName(),
          message : getQuote(randomIndex)
        })

        )
   },1500)

    return ()=>{
      clearInterval(i)
    }
  },[])

  const handleLiveMessageChange = (e) => {
    setLiveMessage(e.target.value);
  };
  const handleLiveSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name:"Shiranjeeth",
        message: liveMessage,
      })
    )
    setLiveMessage("");
  };
  return (
    <>
    <div className="w-full h-[500px] p-4 border border-gray-300 bg-gray-100 rounded-lg overflow-y-auto flex flex-col-reverse shadow-lg">
      {chatMessages.map((c, i) => {
        return <ChatMessage key={i} name={c.name} message={c.message} />;
      })}
    </div>

    <form onSubmit={handleLiveSubmit} className="flex items-center p-4 border-t border-gray-300 bg-white rounded-lg shadow-md mt-2">
      <input
        type="text"
        value={liveMessage}
        onChange={handleLiveMessageChange}
        placeholder="Type a message..."
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <button
        type="submit"
        className="ml-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Submit
      </button>
    </form>
  </>
  )
}

export default LiveChat