import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './types/types';

const Button = ({
  label,
  color = 'primary',
  isLight = false,
  isRounded = false,
  size = 'normal',
  isOutlined = false
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        'button',
        color && 'is-' + color,
        size && 'is-' + size,
        isRounded ? 'is-rounded' : '',
        isLight ? 'is-light' : '',
        isOutlined ? 'is-outlined' : '' 
      )}
    >
      {label}
    </button>
  );
};

export default Button;