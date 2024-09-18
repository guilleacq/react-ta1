import React from "react";
import Card from "./Card";
import './CardContainer.css';

const tareas = [
    {
        titulo: "Tarea 1",
        descripcion: "Descripcion de la tarea 1",
        personaAsignada: "Persona 1",
        fechaInicio: "2021-10-01",
        fechaFin: "2021-10-15"
    },
    {
        titulo: "Tarea 2",
        descripcion: "Descripcion de la tarea 2",
        personaAsignada: "Persona 2",
        fechaInicio: "2021-10-16",
        fechaFin: "2021-10-31"
    },
    {
        titulo: "Tarea 3",
        descripcion: "Descripcion de la tarea 3",
        personaAsignada: "Persona 3",
        fechaInicio: "2021-11-01",
        fechaFin: "2021-11-15"
    }
];

// TA 1
// const CardContainer = () => {
//     return (
//         <div className="card-container">
//             {tareas.map((tarea, index) => ( // Para cada card que este en la lista,
//                 <Card // va a crear un componente card con sus props
//                     key={index}
//                     titulo={tarea.titulo}
//                     descripcion={tarea.descripcion}
//                     personaAsignada={tarea.personaAsignada}
//                     fechaInicio={tarea.fechaInicio}
//                     fechaFin={tarea.fechaFin}
//                 />
//             ))}
//         </div>
//     );
// }


const CardContainer = () => {
    return (
        <div className="card-container">
            {tareas.map((tarea, index) => (
                <Card key={index}>
                    <h2>{tarea.titulo}</h2>
                    <p>{tarea.descripcion}</p>
                    <p>{tarea.personaAsignada}</p>
                    <p>{tarea.fechaInicio}</p>
                    <p>{tarea.fechaFin}</p>
                </Card>)
            )}
        </div>
    )

}
export default CardContainer;