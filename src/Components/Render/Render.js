import React, { useEffect, useState } from 'react';
import Seccion from '../Seccion/Seccion';
import styles from './Render.module.css';

function Render() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data); // Esto se mantiene para ver los datos en la consola
        // Si los datos están directamente como un array, usamos setVideos(data)
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          throw new Error('Data format is incorrect');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const categorias = Array.from(new Set(videos.map(video => video.categoria)));

  return (
    <div className={styles.App}>
      {categorias.map(categoria => (
        <Seccion
          key={categoria}
          categoria={categoria}
          videos={videos.filter(video => video.categoria === categoria)}
        />
      ))}
    </div>
  );
}

export default Render;
