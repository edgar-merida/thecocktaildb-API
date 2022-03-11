import React from "react";
import Image from '../../atoms/Image/Image'
import Title from '../../atoms/Title/Title'
require("./Card.css");


const Card = ({ data, getId }) => {


    const click = (e) => {
        getId('lookup.php?i=' + e);
        console.log(e);
    }


    return (
        <div className="card">
            {data.map((item, index) => (

                <div key={index}>
                    <Image src={item.strDrinkThumb} alt={item.strDrink} onClick={() => { click(item.idDrink) }}/>
                    <Title onclick={() => {click(item.idDrink)}} className={"card__title"} title={item.strDrink}/>
                    {/* <h1 onClick={() => { click(item.idDrink) }} className="card__title">{item.strDrink}</h1> */}
                    <br />
                    <br />
                </div>

            ))}
        </div>
    )
}

export default Card;
