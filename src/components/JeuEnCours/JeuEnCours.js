import React, { useState, useEffect } from 'react';

const JeuEnCours= (props) => {
    let [intCandidatJouant, setIntCandidatJouant] = useState(0);
    let [intNbPassage, setNbPassage] = useState(0);
    let [arrParticipant, setArrParticipant] = useState(props.arrParticipant);
    let [participantQuiJoue, setParticipantQuiJoue] = useState();
    let [arrMotChoisit, setArrMotChoisit] = useState([]);
    let [pointGagner, setPointGagner] = useState(0);
    let [nbErreur, setNbErreur] = useState(0);
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
    const commencerLaPartie = () => {
      setParticipantQuiJoue(arrParticipant[0][intCandidatJouant]);
      console.log(participantQuiJoue);
      setArrMotChoisit(arrMotsATrouver[choisirMot()]);
      console.log(arrMotChoisit);
      
    }
    const choisirMot = () =>{
        console.log("ca passe");
        let intMotChoisit = Math.floor(Math.random()*13);
        return intMotChoisit;
    }
    const tryAnswer = () =>{
      if(document.querySelector(".answer").value===arrMotChoisit[0])
      {
        setPointGagner(pointGagner++);
        if(intCandidatJouant !== arrParticipant[0].length)
        {
          setIntCandidatJouant(intCandidatJouant++);
          
        }
        else
        {
          setIntCandidatJouant(0);
        }
        changerCandidat();
      }
      else
      {
        setNbErreur(nbErreur++);
        if(nbErreur===3)
        {
          console.log("tour fini");
        }
        console.log("mauvaise réponse");
      }
      console.log(document.querySelector(".answer").value);
    }
    const changerCandidat = () =>{
      setParticipantQuiJoue(arrParticipant[0][intCandidatJouant]);
    }
    useEffect(() => {
      console.log("use effect")
      if(intNbPassage<1)
      {
        commencerLaPartie();
        setNbPassage(1);
      }
    });
  return (
    <div className="jeuCours">
        <h2>C'est le tour à : {participantQuiJoue}</h2>
        <h3>Trouvez le mot désigné par la définition suivante:</h3>
        <h4><strong>{arrMotChoisit[1]}</strong></h4>
        <input class="answer" type="text"/>
        <button onClick={()=>tryAnswer()}>soumettres</button>
    </div>
  );
}

export default JeuEnCours;