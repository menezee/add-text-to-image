import React, {useState} from 'react';
import styles from './image-container.module.scss';
import {DraggableText} from '../../components';

export function ImageContainer() {
  const [image, setImage] = useState();
  const [listOfText, setListOfText] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.container__column}>
        <div className={styles['container__button-group']}>
          <input type='file' onChange={e => {
            setImage(URL.createObjectURL(e.target.files[0]))
          }}
          />
          <button onClick={() => setListOfText([...listOfText, {}])}>add text</button>
        </div>
      </div>
      {
        image &&
        <div className={styles.container__column}>
          {
            listOfText.map(() => (
              <DraggableText/>
            ))
          }
          <img src={image} alt='user dropped'/>
        </div>
      }
    </div>
  )
}

