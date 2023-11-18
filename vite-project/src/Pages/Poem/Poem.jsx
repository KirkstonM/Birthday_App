import React from 'react';
import { Container } from 'react-bootstrap';
import { BsDownload } from "react-icons/bs";
import { Link } from 'react-router-dom';
import HomeButton from '../../Components/HomeButton/HomeButton';
import IMAGE_01 from '../../assets/poem_image.jpg'

function Poem() {
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_01})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100vw'
      }}
    >
      <Container
        style={{
          width: "390px",
          height: "750px",
          backgroundColor: "transparent",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.952), 0 4px 6px rgba(26, 26, 26, 0.705)"
        }}>
        <div style={{ float: "right" }}>
          <BsDownload style={{ fontSize: '1.5rem', color: 'white' }} />
        </div>
      </Container>
      <Link to='/' className='mt-4'>
        <HomeButton />
      </Link>
    </div>
  )
}

export default Poem