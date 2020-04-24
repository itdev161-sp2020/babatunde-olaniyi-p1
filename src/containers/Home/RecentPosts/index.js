import React from 'react'
import Card from '../../../components/UI/Card';
import './style.css';

/**
* @author
* @function RecentPosts
**/

const RecentPosts=(props)=> {
  return(
   <div style= {props.style}>
    <Card style={{marginBottom:'20px'}}>
      <div className="postImageWrapper">
      <img src={('../../blogPostImages/beautiful-&-simple.jpg')} alt=""/>
          </div>
      
   <div style={{textAlign:'center'}}>
       
       <span>Featured</span>
       <h2>Fitness Mantra To Live Fit Life</h2>
       <span>posted on July21,2016 by Sora Blogging Tips</span>
       <p>Midst first it, you're multiply divided.There don't,second</p>
      
        <button>Read More</button>

      </div>
  

     </Card>
     </div>
   )

 }

export default RecentPosts;