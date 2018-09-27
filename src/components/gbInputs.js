import React from 'react';
import '../style/gb-style.css';

export const GbInputs = ({labelFor, inputClass, inputType, inputPlaceholder, SVG} ) => {

  return (
      
         <div class='gb-input-wrapper-relative'>
                <label for={labelFor}>
                <div>{SVG}</div>
                </label>
                <input className={inputClass}  type={inputType} placeholder={inputPlaceholder}/>
         </div>
        
         
  );
};