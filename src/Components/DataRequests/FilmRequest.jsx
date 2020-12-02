import React, {useState} from 'react';
import axios from 'axios';

const FilmReq = () => {
  const [data,setData]= useState("");
  const [ApiKey, setApiKey] = useState("");
  const [FilmTitle, setFilmTitle] = useState("");
  const [Error, setError]

  const updateApiKey = (e) => {
      setApiKey(e.target.value);
  }
  const updateTitle = (e) => {
      setFilmTitle(e.target.value);
  }

  const makeRequest =(e) => {
      axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
      .then(response => {
          console.log(response.data);
          setData(response.data);
      }, (error) => {
          setError(error);
      });
  };

  return (
      <div>
      <p>API Key</p>
      <input type="text" onChange={(e)=>updateApiKey(e)} />
      <p>Which film</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />
      <p>
          Click for information
      </p>
      <button onClick={(e) => makeRequest(e)}>Click me</button>

      <h4>{data.Title}</h4>
      <h4>{data.Year}</h4>
      <h4>{data.Rated}</h4>
      <h4>{data.Genre}</h4>
      <h4>{data.Plot}</h4>
      <img src={data.Poster} alt="The poster"></img>
      </div>
  );
}

export default FilmReq; 