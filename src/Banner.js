import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import request from './request';

function Banner() {
  const [ movie, setMovie ] = useState( [] );
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      // console.log(requests.data.results);
      setMovie(
        requests?.data.results[
          Math.floor(Math.random() * requests.data.results.length)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);
  // console.log(movie);
   function truncate ( str, n )
    {
        return str?.length > n ? str.substr( 0, n - 1 ) + "..." : str;
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner



// Deploy complete!

// Project Console: https://console.firebase.google.com/project/netflix-pro-2662d/overview
// Hosting URL: https://netflix-pro-2662d.web.app


