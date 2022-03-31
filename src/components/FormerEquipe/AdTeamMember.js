import React, { useState } from 'react';

const AdTeamMember= (props) => {
  
  return (
    <div>
        <input type="text" className='nomParticipant'/>
        <button className="boutonAjouter" onClick={props.ajouter} disabled={props.ajoutDisabled}>ajouter</button>
        
    </div>
  );
}

export default AdTeamMember;