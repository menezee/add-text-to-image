import React from 'react';
import {ImageContainer} from './containers/image-container';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ImageContainer/>
    </div>
  );
}

export default App;
