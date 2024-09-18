import React from "react";
import { useState } from "react"; // Este es el hook que nos permite usar estados en componentes funcionales

function TodoList() {
    const [tareas, setTareas] = useState([]); // Acá estamos creando un estado llamado tareas, que es un array vacío
    const [nombreTarea, setNombreTarea] = useState(""); // Este sirve para guardar el nombre de la tarea que se está escribiendo en el input

    const manejarCambio = (evento) => {
        setNombreTarea(evento.target.value);
    }

    const agregarTarea = () => {
        if (nombreTarea.trim() === "") {
            return;
        }

        setTareas([...tareas, nombreTarea]); // con ... agregamos al array "tareas", la tarea con nombreTarea
        setNombreTarea(""); // Reseteamos el nombre de la nueva tarea
    }

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((tareaActual, i) => i !== index); // Acá estamos creando un nuevo array con todas las tareas menos la que queremos eliminar
        setTareas(nuevasTareas);
    }


    return (
        <div className="container">
            <div className="box">
                <h1 className="title">Todo list</h1>

                <div className="field">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Agrega una tarea..."
                            value={nombreTarea} // Acá estamos asignando el valor del input al estado nombreTarea
                            onChange={manejarCambio} // Acá estamos asignando la función manejarCambio al evento onChange del input
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    agregarTarea();
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="control">
                    <button className="button is-primary" onClick={agregarTarea}>Add Task</button>
                </div>

                <ul>
                    {tareas.map((tarea, index) => ( // Acá estamos recorriendo el array tareas y por cada tarea, creamos un li con el nombre de la tarea y un botón para eliminarla}
                        <li key={index} className="box">
                            <div className="is-flex is-justify-content-space-between is-align-items-center">
                                <span>{tarea}</span>
                                <button className="button is-danger is-small" onClick={() => eliminarTarea(index)}>x</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default TodoList;
