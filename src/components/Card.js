import React from 'react';
import './Card.css';

// TA 1

// const Card = ({ titulo, descripcion, personaAsignada, fechaInicio, fechaFin }) => {
//     return (
//         <div className="card">
//             <h2>{titulo}</h2>
//             <p>{descripcion}</p>
//             <p>{personaAsignada}</p>
//             <p>{fechaInicio}</p>
//             <p>{fechaFin}</p>
//         </div>
//     );
// };


const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;