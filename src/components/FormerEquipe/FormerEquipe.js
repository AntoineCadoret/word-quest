import React, { useState } from "react";
import AdTeamMember from "./AdTeamMember";
import Equipe from "./Equipe";

const FormerEquipe = (props) => {
  const [arrEquipe, setArrEquipe] = useState(new Array(new Array()));
  const [nbTeam, setNbTeam] = useState(0);
  const [equipe, setEquipe] = useState();
  const [nbEquipier, setNbEquipier] = useState(0);
  const [debtuterDisable, setDebuterDisable] = useState(true);
  const [ajoutEquipeDisabled, setAjoutEquipeDisable] = useState(true);
  const [ajoutDisabled, setAjoutDisable] = useState(false)

  const ajouter = () => {
    let arrEquipeAMonter = arrEquipe;
    arrEquipeAMonter[nbTeam].push(
      document.querySelector(".nomParticipant").value
    );
    setNbEquipier(nbEquipier + 1);
    if (nbEquipier < 2) {
        setAjoutEquipeDisable(true);
        setDebuterDisable(true);
    } else {
        setAjoutEquipeDisable(false);
      if (nbTeam > 0) {
        setDebuterDisable(false);
      }
    }
    if (nbEquipier == 5) {
        setAjoutDisable(true);
    }
    if (nbTeam >= 3) {
        setAjoutEquipeDisable(true);
    }
    setArrEquipe(arrEquipeAMonter);
    setEquipe(<Equipe arrEquipe={arrEquipe} />);
  };
  const ajouterEquipe = () => {
    let arrEquipeAMonter = arrEquipe;
    setAjoutEquipeDisable(true);
    setDebuterDisable(true);
    // if (arrEquipeAMonter[nbTeam].length <= 1) {
    //     setAjoutEquipeDisable(true);
    // } else {
      setNbEquipier(0);
      setNbTeam(nbTeam + 1);
      setAjoutDisable(false);
      arrEquipeAMonter.push(new Array());
      setArrEquipe(arrEquipeAMonter);
      setEquipe(<Equipe arrEquipe={arrEquipe} />);
    // }
  };
  const handleDebuter = () => {
    console.log("entre child");
    props.handleCallback(arrEquipe);
  };
  return (
    <div>
      <h2>créer vos équipes</h2>
      <h3>ajouter les membre de l'équipe {nbTeam + 1}</h3>
      <p>vous devez ajouter jusqu'à 4 joueus par équipe</p>
      <AdTeamMember ajoutDisabled={ajoutDisabled} ajouter={() => ajouter()} />
      <button 
      className="ajoutEquipe" 
      onClick={() => ajouterEquipe()}
      disabled={ajoutEquipeDisabled}
      >
        ajouter une équipe
      </button>
      <button
        onClick={handleDebuter}
        className="debuter"
        disabled={debtuterDisable}
      >
        Commencer la partie
      </button>
      {equipe}
      
    </div>
  );
};

export default FormerEquipe;
