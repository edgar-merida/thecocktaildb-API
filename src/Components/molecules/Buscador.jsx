import React, { useState } from "react";
import './Buscador.css'


const Buscador = ({ getApi }) => {

    const [valor, setValor] = useState('')

    const onChange = (e) => {
        setValor(e.target.value)
    }
    const click = (e) => {
        e.preventDefault()
        getApi('filter.php?i=' + valor)
        // console.log("buscador: "+valor)   
    }

    return (
        <form className="formulario" onSubmit={(e) => click(e)}>
            <input className="formulario__input" type="text" placeholder="Search by Liquor" onChange={onChange} value={valor} />
            <button className="formulario__button  btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default Buscador;