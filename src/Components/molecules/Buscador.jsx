import React, { useState } from "react";


const Buscador = ({getApi}) => {

    const [valor, setValor] = useState('')


    const onChange = (e) =>{
        setValor(e.target.value)
    }

    const click = (e) => {
        e.preventDefault()
        getApi('filter.php?i='+valor)
       // console.log("buscador: "+valor)   
    }

    return (
            <form onSubmit={(e) => click(e) }>
                <input  type="text" placeholder="Search by liquor" onChange={onChange} value={valor} />
                <button className="btn btn-outline-success" type="submit">Search</button>  
            </form>
    )
}

export default Buscador;