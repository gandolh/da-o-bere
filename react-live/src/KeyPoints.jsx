import React from 'react';

const KeyPoint = ({Image, Title, Description}) => {
    const keyPoints=[
        {
            "Image":"sd", //path
            "Title":"Sustineti prietenul drag ",
            "Description":
            "Poti sa ii dai fratelui sau surorii tale o bere."+
            " Merita dupa ce te-a ajutat" + 
            "sa iei examenul la logica,mate sau orice alta materie" 
        },
        {
            "Image":"sd", //path
            "Title":"Gratis si deschis pentru toata lumea",
            "Description":"Mereu cand simti nevoia sau iti amintesti "+
            "de un gest frumos pe care l-a facut un coleg de-al tau " +
            "poti sa intri, "+
            "sa ii dai o bere si sa il lasi un mesaj frumos"
        },
        {
            "Image":"", //path
            "Title":"Clasamentul reflecta aprecierea colectiva",
            "Description":
            "Desi datul berii este anonim, primitul nu este. Cei mai buni colegi vor "+
            "avea cele mai multe beri in leaderboard si vor avea aprecierea eterna "+
            "a studentilor de la FMI IA."
        }
    ]

    return ( 
        <div className='keyPointsBody'>
        {keyPoints.map((kp, i) => (
        <div key={'keyPoint'+i} className='keyPointEntry'>
            <img src="http://localhost:3000/static/media/beer.6b6f4b3813b7106c201a.png" height="50"/>
            <h5>{kp.Title}</h5>
            <small>{kp.Description}</small>
        </div>
        )
        )}
        </div>

    );
}
 
export default KeyPoint;