import React from 'react';
import { images } from '../../assets/images';
import { Gallery } from "react-grid-gallery";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeButton from '../../Components/HomeButton/HomeButton';

function PhotoGallery() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container style={{
        width: "390px",
        height: "750px",
        backgroundColor: "transparent",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.952), 0 4px 6px rgba(26, 26, 26, 0.705)",
        overflow: "scroll",
        scrollbarWidth: "thin"
      }}>
        <Gallery images={images} />
      </Container>

      <Link to='/' className='mt-4'>
        <HomeButton />
      </Link>
    </div>
  )
}

export default PhotoGallery