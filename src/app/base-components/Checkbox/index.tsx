import React from 'react';
import * as style from './style.css';

interface Props {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<Props> = ({ isChecked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      className={style.checkbox}
      onChange={(event) => onChange(event.target.checked)}
      />
  )
}

export default Checkbox;
