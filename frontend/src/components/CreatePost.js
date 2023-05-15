import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const CreatePost = (props) => {
    const [post, setPost] = useState({title: "", content: ""})
    const navigate = useNavigate()
    

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        
        setPost((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.addPost(post);

        setPost({title: "", content: ""})

        navigate('/', { replace: true });
    }


    return (
        <div className='container'>
        <h1>Create Post</h1>
        <form className='form-create-post' onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input onChange={onChangeHandler} value={post.title} name="title" type="text" />
            <label>Content</label>
            <textarea onChange={onChangeHandler} value={post.content} name="content" type="text" rows="8"/>
            <button className='publish'>Publish</button>
        </form>
        </div>
    )
}