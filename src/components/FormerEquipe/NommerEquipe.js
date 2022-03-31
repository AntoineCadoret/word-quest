import React, { useState } from 'react';

const AdTeam= (props) => {
  
  return (
    <div>
        <input type="text" className='nomEquipe'/>
        <button onClick={props.ajouter}>ajouter</button>
        
    </div>
  );
}

export default AdTeam;