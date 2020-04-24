import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

const SideImage=props=>{
    return (
        <div style={{height:`${props.height}px`}}>
            <img src={props.src} alt=""/>
            </div>
    );

}

const ImageGallery=props=>( <div className="galleryPost" style={props.galleryStyle}>
 
 <section style={{width:'70%'}}>
        <div>
            <img src={require('../../blogPostImages/female-cliff-workout.jpeg')} alt="CEO"/>
        </div>
          </section>
         <section className={"sideImageWrapper"} style={{width:'30%'}}>

          <SideImage 
          height={props.sideImageHeight}
          src= {require('../../blogPostImages/woman-pointing-at-sky-on-seashore.jpeg')} alt=""
          />
          <SideImage 
          height={props.sideImageHeight}
          src= {require('../../blogPostImages/backlit-beach-dawn-dusk.jpeg')} alt=""
          />
          <SideImage 
          height={props.sideImageHeight}
          src= {require('../../blogPostImages/adventure-balance-balanced-balancing.jpg')} alt=""
          />

      </section>
      </div>
);

   const Home = props => {
    

    const galleryHeight = 450;
    const galleryStyle = {
      height: galleryHeight+'px',
      overflow:'hidden'
    }
  
    const sideImageHeight=galleryHeight/3; 

    return (
        <div>
         <Card>
             
         <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          
        
          // images={[]}

          />
          
    
           </Card>
        

          
 

    <section className="HomeContainer">

        <RecentPosts style={{width:'70%',color:'red'}}/>
       <Sidebar/>

       </section>

     </div>

    );
}
export default Home;