import { useState } from "react";

export const CandidatoApp = ({ titulo }) => {

    // seteo variables
    const [contadorVotos, setContadorVotos] = useState(0)

    // funcion para sumar votos
    const sumoVoto = () => {

        setContadorVotos(contadorVotos + 1)
    }

    // funcion para restar votos
    const restoVoto = () => {


        if (contadorVotos > 0) {
            setContadorVotos(contadorVotos - 1)
        }

    }


    return (

        <>
            <div id="candidato">
                <h3>{titulo}</h3>
                <h1 id="contador">{contadorVotos}</h1>
                <div id="botones">
                    <button onClick={sumoVoto}>+</button>
                    <button onClick={restoVoto}>-</button>
                </div>
            </div>
        </>
    )

}