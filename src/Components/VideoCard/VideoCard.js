import React from 'react';
import styles from './VideoCard.module.css';

function VideoCard({ video }) {
  return (
    <div className={styles.videoCard}>
      <img src={video.link} alt={video.titulo} className={styles.thumbnail} />
      <div className={styles.details}>
        <h4>{video.titulo}</h4>
        <a href={video.link} target="_blank" rel="noopener noreferrer">Ver Video</a>
      </div>
    </div>
  );
}

export default VideoCard;

