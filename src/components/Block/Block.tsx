import React from 'react';
import { BlockProps } from './types/types';

const Block = ({ children }: BlockProps) => {
  return (
    <div className="block">
  	  { children }  
  	</div>
  );
}

export default Block;
