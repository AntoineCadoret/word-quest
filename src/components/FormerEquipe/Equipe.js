import React, { useState } from 'react';
import "./Equipe.css";

const Equipe= (props) => {
  
  return (
    <div className="equipier">
        {props.arrEquipe.map((item, index) => (
            <div>
            <p>Équipe {index + 1}</p>
            {props.arrEquipe[index].map((item, indexEquipier) => (
                <p key={indexEquipier}>{props.arrEquipe[index][indexEquipier]}</p>
            ))}
            </div>
        ))}
    </div>
  );
}

export default Equipe;