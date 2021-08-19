import "./styles.css";
import Row from "./row.js";
import requests from "./requests";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLarge={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
