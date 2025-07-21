import React from 'react';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, original_language, vote_average, overview } = movie;

  return (
    <div className="movie-card">
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
        alt={title}
      />
      <div className="info">
        <h3>{title}</h3>
        <p><strong>Release:</strong> {release_date}</p>
        <p><strong>Language:</strong> {original_language.toUpperCase()}</p>
        <p><strong>Rating:</strong> {vote_average}</p>
        <p>{overview.slice(0, 120)}...</p>
      </div>
    </div>
  );
};

export default MovieCard;
