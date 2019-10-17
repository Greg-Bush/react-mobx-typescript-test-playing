import React from 'react';
import * as style from './style.css';

interface Props {
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ onPress, children, disabled = false}) => {
  return (
    <button disabled={disabled} className={style.button} onClick={onPress}>
      {
        children
      }
    </button>
  )
}

export default Button;
