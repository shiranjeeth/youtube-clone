import React from 'react'
import UserIcon from '../../assets/images/user-icon.png';
const CommentsContainer = () => {
    const commentData = [
        {
            name : "Shiranjeeth",
            text : "Lorem ipsum",
            replies : [
                {
                    name : "Shiranjeeth",
                    text : "Lorem ipsum",
                    replies : [
                        {
                            name : "Shiranjeeth",
                            text : "Lorem ipsum",
                            replies : [
                                {
                                    name : "Shiranjeeth",
                                    text : "Lorem ipsum",
                                    replies : [
                        
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name : "Shiranjeeth",
            text : "Lorem ipsum",
            replies : [
                {
                    name : "Shiranjeeth",
                    text : "Lorem ipsum",
                    replies : [
                        {
                            name : "Shiranjeeth",
                            text : "Lorem ipsum",
                            replies : [
                
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name : "Shiranjeeth",
            text : "Lorem ipsum",
            replies : [

            ]
        },
        {
            name : "Shiranjeeth",
            text : "Lorem ipsum",
            replies : [

            ]
        }
    ]
    const Comment =({data})=>{
        const {name,text,replies} = data
        return (
            <div className='flex shadow-sm bg-gray-100 rounded-lg my-3'>
        <img alt="user" src={UserIcon} className='w-12 h-12'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
            </div>
        )
    }

    const CommentsList = ({comments})=>{
     return comments.map((comment,index)=>{
      return  <div key={index}>
        <Comment data={comment}/> 
            <div className='pl-5 border border-l-black ml-5'>
              <CommentsList comments={comment.replies}/>
             </div>
        </div>
     })
    }
  return (
    <div className='mx-5 py-2'>
       <h1 className='text-2xl font-bold '>Comments : </h1>
       <CommentsList comments={commentData}/>
        </div>
  )
}

export default CommentsContainer