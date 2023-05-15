import React from 'react'
import { useParams, Link } from 'react-router-dom'

export const Post = (props) => {

    const {items} = props;

    let { title } = useParams();

    const post = items.filter(item => {
        if (item.title === title) {
            return item;
        }
    })

    console.log(post)

    return (
        <div className='container'>
            <h1>{post[0].title}</h1>
            <p>{post[0].content}</p>
            <Link className='backButton' to="/">Back</Link>
        </div>
    )
}