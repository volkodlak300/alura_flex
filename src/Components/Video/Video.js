import React from 'react';
import styles from './Video.module.css';

function Video({ video }) {
  return (
    <div className={styles.Video}>
      <h3>{video.titulo}</h3>
      <a href={video.link} target="_blank" rel="noopener noreferrer">Ver Video</a>
    </div>
  );
}

export default Video;

