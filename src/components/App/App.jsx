import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../galleryList/GalleryList';

function App() {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        setGallery(response.data)
      })
      .catch((error) => {
        console.log('getGallery fail:', error);
      })
  }


    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList gallery={gallery}/>

      </div>
    );
}

export default App;
