import React, { useState } from 'react';
import Intro from "./components/Beginning/Intro";
import FormerEquipe from './components/FormerEquipe/FormerEquipe';
import JeuEnCours from './components/JeuEnCours/JeuEnCours';

const App = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isSettingTeam, setIsSettingTeam] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [arrParticipant, setArrParticipant] = useState([]);
  const arrMotsATrouver=[
    ["pizza","Galette italienne en pâte à pain garnie de mozzarelle, de tomates, d'anchois, d'olives, etc."],
    ["orange","D'une couleur formée du mélange de jaune et de rouge."],
    ["pirater","Accéder illégalement à un système informatique depuis un ordinateur distant afin d'en consulter les données, de les modifier, voire de les subtiliser."],
    ["télévision","Transmission, par câble ou par ondes radioélectriques, d'images pouvant être reproduites sur un écran au fur et à mesure de leur réception, ou enregistrées en vue d'une reproduction ultérieure. "],
    ["hockey","Sport d'équipe pratiqué avec une crosse."],
    ["pelouse","Terrain couvert d'herbe maintenue rase par des fauches fréquentes."],
    ["poisson","Vertébré aquatique, respirant toute sa vie au moyen de branchies et pourvu de nageoires locomotrices."],
    ["verre","Substance minérale fabriquée, transparente et isotrope."],
    ["conjuguer","Joindre des choses ensemble, les associer"],
    ["camion","Véhicule automobile destiné au transport de lourdes charges."],
    ["loutre","Carnivore mustélidé aquatique aux pattes palmées, mangeur de poissons."],
    ["lion","Grand mammifère félidé carnivore, au pelage fauve orné d'une crinière chez le mâle, confiné aujourd'hui dans les savanes d'Afrique et dans une réserve au nord-ouest de l'Inde, après avoir vécu au Proche-Orient et en Europe."],
    ["pantalon","Culotte à jambes longues descendant jusqu'à la cheville."],
    ["dictionnaire","Ouvrage didactique constitué par un ensemble d'articles dont l'entrée constitue un mot, indépendants les uns des autres et rangés dans un ordre déterminé, le plus souvent alphabétique. (Abréviation familière : dico.) "],
    ["bateau","Nom générique des embarcations susceptibles de naviguer sur les voies intérieures ou en mer. "]];
  
  const begin = () =>{
    setIsBeginning(false);
    setIsSettingTeam(true);
  };

  const handleCallback = (arrEquipe) => {
    console.log(arrEquipe);
    setArrParticipant(arrEquipe);
    setIsSettingTeam(false);
    setIsPlaying(true);
  };
  
  return (
    <div>
      <h1>Word Quest!!</h1>
      {isBeginning && (<Intro begin={()=>begin()}/> )}
      {isSettingTeam && (<FormerEquipe handleCallback={handleCallback}/> )}
      {isPlaying && (<JeuEnCours arrParticipant={arrParticipant}/>)}
    </div>
  );
}

export default App;
