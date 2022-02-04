import React from 'react';

const KeyPoint = ({Image, Title, Description}) => {
    const keyPoints=[
        {
            "Image":"fas fa-3x fa-users", //path
            "Title":"Sustineti prietenul drag ",
            "Description":
            "Poti sa ii dai fratelui sau surorii tale o bere."+
            " Merita dupa ce te-a ajutat " + 
            "sa iei examenul la logica,mate sau orice alta materie" 
        },
        {
            "Image":"fas fa-3x fa-door-open", //path
            "Title":"Deschis pentru toata lumea",
            "Description":"Mereu cand simti nevoia sau iti amintesti "+
            "de un gest frumos pe care l-a facut un coleg de-al tau " +
            "poti sa intri, "+
            "sa ii dai o bere si sa il lasi un mesaj frumos"
        },
        {
            "Image":"fas fa-3x fa-trophy", //path
            "Title":"Clasamentul reflecta aprecierea",
            "Description":
            "Desi datul berii este anonim, primitul nu este. Cei mai buni colegi vor "+
            "avea cele mai multe beri in leaderboard si vor avea aprecierea eterna "+
            "a studentilor de la FMI IA."
        }
    ]

    return ( 
        <div className=' keyPointsBody'>
        {keyPoints.map((kp, i) => (
        <div key={'keyPoint'+i} className='keyPointEntry'>
            <i className={kp.Image} style={{color:'#ffdd00',textShadow:"2px 2px 0 #000 "}}></i>
            <h5 style={{fontWeight:600,marginTop:'10px'}}>{kp.Title}</h5>
            <small>{kp.Description}</small>
        </div>
        )
        )}
        </div>

    );
}
 
export default KeyPoint;