const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ea139948&s=";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Gallery (props) {
  const initialState = {
    films: [],
    isLoading: true,
  };

  const [state, setState] = useState(initialState)

  const navigate = useNavigate()

  async function getFilms () {
    try {
      const response = await fetch(URL + props.film);
      if (response.ok) {
        const data = await response.json();
        setState({
          films: data.Search,
          isLoading: false,
        });
      } else {
        setState({
          isLoading: false,
        });
        throw new Error('ERROR something went wrong');
      }
    } catch (error) {
      console.log(error);
      setState({
        isLoading: false,
      });
    }
  };

  useEffect(() => {getFilms();}, []) ;
    
  

    return (
      <>
        <h4 className="text-white mx-3 mt-4">{props.title}</h4>
        {state.isLoading && (
          <div className="d-flex justify-content-center align-items-center" style={{height: "18em"}}>
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        <div className="row mx-3">
          {state.films.length > 0 ? (
            state.films.map((film) => (
              <div key={film.imdbID} className="col mb-2 text-center px-1">
                <img
                  className="img-fluid"
                  src={film.Poster}
                  alt={film.Title}
                  style={{ height: "18em" }}
                  onClick={() => {navigate("/MovieDetails/" + film.imdbID)}}
                />
              </div>
            ))
          ) : (
            !state.isLoading && (<div className="d-flex justify-content-center align-items-center" style={{height: "18em"}}><p className="text-white">No films found</p></div>)
          )}
        </div>
      </>
    );
  }

export default Gallery;
