import React, { ReactNode } from 'react';

/* --------------------------------------------------------------------------- */

interface IProps {
  className?: string;
  classNameOfInput?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  [key: string]: any;
}

/* --------------------------------------------------------------------------- */

export default function CustomInput({ className = '', classNameOfInput = '', startAdornment, endAdornment, ...others }: IProps) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded bg-white ${className}`}>
      {startAdornment}
      <input className={`flex-1 focus:outline-none ${classNameOfInput}`} {...others} />
      {endAdornment}
    </div>
  );
}