// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
      {/* <Row title="Trending Now" fetchUrl={requests.}/> */}
    </div>
  );
}

export default App;
