import React, {useState} from 'react';
import Draggable from 'react-draggable';
import styles from './draggable-text.module.scss';

export function DraggableText() {
  const [text, setText] = useState('default text');

  return (
    <Draggable
      defaultClassName={styles.draggable}
      enableUserSelectHack={false}
    >
      <div>
        <input
          className={styles.draggable__text}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
    </Draggable>
  )
}
