import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IMAGE_02 from '../../assets/story_image.jpg';
import HomeButton from '../../Components/HomeButton/HomeButton';

function Story() {

   
  return (
    <div
    style={{
      backgroundImage: `url(${IMAGE_02})`,
      backgroundPosition : "center",
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <Container
      style={{
        width: "390px",
        height: "750px",
        backgroundColor: "transparent",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.952), 0 4px 6px rgba(26, 26, 26, 0.705)"
      }}
      >
        <div 
        style={{
          color:"white",
          padding: "2rem 0.2rem"
          }}>
          <h3>SO WHERE SHOULD I START...</h3>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam inventore hic ipsa saepe. Obcaecati culpa ad ratione laudantium, sed nihil tempora corrupti, excepturi veritatis recusandae quam voluptatem voluptate voluptatum.
             </p>
        </div>
        
      </Container>
      <Link to='/' className='mt-4'>
      <HomeButton/>
      </Link>
    </div>
  )
}

export default Story;