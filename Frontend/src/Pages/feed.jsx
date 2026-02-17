import React, { useState,useEffect } from 'react'
import axios from "axios"

const feed = () => {

    const [post,setPosts] = useState([
        {
            _id:"1",
            image:"https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption:"Beautiful scenery"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/post")
        .then((res)=>{
            setPosts(res.data.post)
        })
    },[])

  return (
      <section className='feed-section'>
        <h1>Feed</h1>
        {
            post.length>0?(
                post.map((post)=>(
                    <div key={post._id}className="post-card">
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ):null
        }
    </section>
  )
}

export default feed
