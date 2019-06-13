import React from 'react';

import styles from './Button.module.css';

function Button(props) {
  const { title, onClick } = props;
  return (
    <div className={styles.root} onClick={onClick}>
      <p className={styles.title} >{title}</p>
    </div>
  )
}

export default Button;
