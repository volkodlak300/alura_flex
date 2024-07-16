import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import styles from './Seccion.module.css';

function Seccion({ categoria, videos }) {
  return (
    <div className={styles.seccion}>
      <h3>{categoria}</h3>
      <div className={styles.videos}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Seccion;

