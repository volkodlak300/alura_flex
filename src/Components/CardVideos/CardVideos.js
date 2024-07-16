import React from 'react';
import styles from './CardVideos.module.css';

const CardVideos = ({ video }) => {
  return (
    <div className={styles.cardVideos}>
      <h3>{video.titulo}</h3>
      <a href={video.link} target="_blank" rel="noopener noreferrer">Ver Video</a>
    </div>
  );
};

export default CardVideos;
