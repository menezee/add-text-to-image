import React, {useState, useRef} from 'react';
import styles from './image-container.module.scss';
import htmlToImage from 'html-to-image';
import {DraggableText} from '../../components';

export function ImageContainer() {
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState();
  const [listOfText, setListOfText] = useState([]);
  const divToSaveImageRef = useRef(null);

  const parseImage = file => URL.createObjectURL(file);
  const handleImageSelection = e => {
    const file = e.target.files[0];
    const parsedImage = parseImage(file);
    setImage(parsedImage);
    setImageName(file.name);
  };

  const addText = () => {
    const dummyTextObject = {};
    setListOfText([...listOfText, dummyTextObject]);
  };

  const downloadDivAsImage = divToPrint => {
    htmlToImage.toPng(divToPrint)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = imageName;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__column}>
        <div className={styles['container__button-group']}>
          <input type='file' onChange={handleImageSelection}
          />
          <button onClick={addText}>add text</button>
        </div>
      </div>
      {
        image &&
        <div className={styles.container__column} ref={divToSaveImageRef}>
          {
            listOfText.map(() => (
              <DraggableText/>
            ))
          }
          <img src={image} alt='user dropped'/>
        </div>
      }
      <div className={styles.container__column}>
        <button onClick={() => {
          const divToPrint = divToSaveImageRef.current;

          downloadDivAsImage(divToPrint);
        }}>
          save
        </button>
      </div>
    </div>
  )
}

