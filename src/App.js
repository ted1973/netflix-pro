
import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Nav from './Nav';
import request from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="Top Rated Movies" fetchurl={request.fetchTopRatedMovies} />
      <Row title="ACTION Movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Docmetaries" fetchurl={request.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;




