import React from 'react';
import * as style from './style.css';

interface Props {
  onPress: () => void;
}

const Button: React.FC<Props> = ({ onPress, children}) => {
  return (
    <button className={style.button} onClick={onPress}>
      {
        children
      }
    </button>
  )
}

export default Button;
