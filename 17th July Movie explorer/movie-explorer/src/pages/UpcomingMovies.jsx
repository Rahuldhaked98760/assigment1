import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api';
import MovieCard from '../components/MovieCard';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const loadMoreMovies = async () => {
    try {
      setLoading(true);
      const data = await fetchUpcomingMovies(page);
      setMovies(prev => [...prev, ...data.results]);
      setPage(prev => prev + 1);
      if (page >= data.total_pages) setHasMore(false);
    } catch (err) {
      setError('Failed to load movies.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreMovies();
  }, []);

  return (
    <div className="upcoming-page">
      <h1>Upcoming Movies</h1>
      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {!loading && hasMore && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={loadMoreMovies}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default UpcomingMovies;

