import Hero from '../components/Hero'
import Gallery from '../components/Gallery'

function TvShows() {
  return (
    <>
      <Hero />
      <Gallery title="Trending Now" film="harry potter" />
      <Gallery title="Watch it Again" film="star wars" />
      <Gallery title="New Releases" film="the lord of the rings" />
    </>
  );
}

export default TvShows