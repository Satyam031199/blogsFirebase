import React, { useEffect, useState } from 'react'
import { db, auth } from "../config/firebaseConfig";
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const[title,setTitle] = useState("")
    const[postText,setPostText] = useState("")
    const blogCollectionRef = collection(db,'posts')
    const navigate = useNavigate()
    const createPost = async () => {
        try {
            await addDoc(blogCollectionRef,{
               postText,
               title,
               author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
            })
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        if(!auth){
            navigate('/login')
        }
    })
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost