import React from 'react'
import { Link } from 'react-router-dom'


export const Home = (props) => {


    return(
        <div className='container'>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie ante in tempor ultrices. Maecenas sed orci sit amet sem sagittis ullamcorper. Nam dictum, urna in blandit tempus, sapien nulla blandit mi, a tincidunt mauris nisl sed erat. In non eros quam. Morbi vitae consequat felis, id tristique mi. In venenatis augue id odio tincidunt, et ullamcorper lacus sodales. Nunc sed risus congue justo auctor laoreet. Nulla facilisi. Vivamus a ex et libero malesuada elementum. Praesent et quam feugiat, hendrerit felis vitae, mattis leo. Aenean quis nunc mi. Sed luctus fermentum ante, ut aliquet ipsum condimentum eget. Proin vel tristique mi. Fusce lobortis mollis erat, nec bibendum est suscipit rhoncus. Integer congue aliquet eros, at condimentum turpis ornare a.</p>

            {props.postList.map(function(item, index) {
                return (
                    <div key={index}>
                <h1>{item.title}</h1>
                <p className='content'>{item.content.substring(0, 100)}... <Link to={"/post/" + item.title}>Read more</Link></p>
                </div>
                )
            })}

        </div>
    )
}