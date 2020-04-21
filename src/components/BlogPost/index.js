import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
     <div className="blogPostContainer">
       <Card>
           <div  className="blogHeader">
           <span className="blogCategory">Featured</span>
           <h1 className="postTitle">Beautiful is always beautiful</h1>
           <span className="postedBy">posted on July21, 2016 bySora blogging Tips</span>
           </div>

           <div className="postImageContainer">
            <img src={require('../../blogPostImages/memories-from.jpg')} alt="Post Image"/>
           </div>
        <div className="postContent">
           <h3>Post Title</h3>
           <p>lorem ipsim</p>
        </div>
        
           </Card>
         </div>
    
   )

 }

export default BlogPost