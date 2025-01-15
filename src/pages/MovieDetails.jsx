import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert } from "bootstrap/dist/js/bootstrap.min";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMDAxY2QyMjA3MTAwMTVkZTJmNTUiLCJpYXQiOjE3MzY5NTE1OTgsImV4cCI6MTczODE2MTE5OH0.CvmnzKh3LRWMNEcLb0mRW1vLGkHSOHCamVUJf6rUv5o";

function MovieDetails() {
  const params = useParams();
  const URL = `http://www.omdbapi.com/?apikey=ea139948&i=${params.movieID}`;
  const URL2 = `https://striveschool-api.herokuapp.com/api/comments/${params.movieID}`;

  const [film, setFilm] = useState({});
  const [filmDetails, setFilmDetails] = useState([]);
  const [loading, setLoading] = useState(true); // Aggiungi uno stato per gestire il caricamento

  const getFilm = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setFilm(data);
      } else {
        throw new Error("Errore nei dati raccolti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFilmDetails = async () => {
    try {
      const response = await fetch(URL2, {
        headers: {
          Authorization: TOKEN,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFilmDetails(data);
      } else {
        throw new Error("Errore nei dati raccolti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true); // Imposta il caricamento su true quando inizia il fetch
    getFilm();
    getFilmDetails();
  }, [params.movieID]);

  // Dopo che i dati sono stati caricati, imposta loading su false
  useEffect(() => {
    if (film && filmDetails) {
      setLoading(false);
    }
  }, [film, filmDetails]);

  if (loading) {
    return <div className="spinner-border text-secondary" role="status"></div>; // Mostra una schermata di caricamento fino al termine
  }

  return (
    <div className="row justify-content-center">
      <div className="card text-white bg-dark col-6" style={{ width: "18rem" }}>
        <img className="card-img-top" src={film.Poster} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{film.Title}</h5>
          <p className="card-text">{film.Plot}</p>
        </div>
      </div>

      {filmDetails ? (
        <div className="col-6">
          <h2 className="h1 text-white">Comments</h2>
          <ul>
            {filmDetails.map((film) => (
              <li className="text-white" key={film._id}>
                {film.comment}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="col-6">
          <Alert variant="info">There are no comments</Alert>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
