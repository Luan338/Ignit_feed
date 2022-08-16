import React from 'react';
import styles from "./Avatar.module.css";

export default function Avatar({src, text, main_avatar}) {
  return (
    <img className={main_avatar ? styles.perfil_style : styles.perfil} src={src} alt={text} />
  )
}

