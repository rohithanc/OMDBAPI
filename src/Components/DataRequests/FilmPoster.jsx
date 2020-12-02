import React from 'react';
const MoviePoster = ({poster}) => {
return(  
    <Card className= "movie-poster">
        <Card.Img src={poster} alt="Card image" style={{ width: '100%' }}/>
    </Card>
);
}
export default MoviePoster;