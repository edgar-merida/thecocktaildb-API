import React from 'react'
import Button from '../../atoms/Buttons/Button'
import Title from '../../atoms/Title/Title'
import Image from '../../atoms/Image/Image'

import 'bootstrap/dist/css/bootstrap.min.css';

require('./Drink.css')

const Drink = ({ data, getQuery }) => {

    const click = (q) => {
        getQuery(q)
    }

    return (
        <div className="drink">
            {data.map((item, index) => (
                <div key={index}>
                    {/* <Title className='drink__title' title={item.strDrink} /> */}
                    <Image className="drink__img" src={item.strDrinkThumb} alt={item.strDrink} />
                </div>
            ))}
            {data.map((item, index) => (
                <div className='drink__text' key={index}>
                    <Title className='drink__title' title={item.strDrink} />
                    <h2>Ingredients: </h2>
                    <h4>{item.strIngredient1 ? (item.strIngredient1 + ' :  ' + item.strMeasure1) : (null)}</h4>
                    <h4>{item.strIngredient2 ? (item.strIngredient2 + ' :  ' + item.strMeasure2) : (null)}</h4>
                    <h4>{item.strIngredient3 ? (item.strIngredient3 + ' :  ' + item.strMeasure3) : (null)}</h4>
                    <h4>{item.strIngredient4 ? (item.strIngredient4 + ' :  ' + item.strMeasure4) : (null)}</h4>
                    <h4>{item.strIngredient5 ? (item.strIngredient5 + ' :  ' + item.strMeasure5) : (null)}</h4>
                    <h4>{item.strIngredient6 ? (item.strIngredient6 + ' :  ' + item.strMeasure6) : (null)}</h4>
                    <h4>{item.strIngredient7 ? (item.strIngredient7 + ' :  ' + item.strMeasure7) : (null)}</h4>
                    <h4>{item.strIngredient8 ? (item.strIngredient8 + ' :  ' + item.strMeasure8) : (null)}</h4>
                    <h4>{item.strIngredient9 ? (item.strIngredient9 + ' :  ' + item.strMeasure9) : (null)}</h4>
                    <h4>{item.strIngredient10 ? (item.strIngredient10 + ' :  ' + item.strMeasure10) : (null)}</h4>
                    <h4>{item.strIngredient11 ? (item.strIngredient11 + ' :  ' + item.strMeasure11) : (null)}</h4>
                    <h4>{item.strIngredient12 ? (item.strIngredient12 + ' :  ' + item.strMeasure12) : (null)}</h4>
                    <h4>{item.strIngredient13 ? (item.strIngredient13 + ' :  ' + item.strMeasure13) : (null)}</h4>
                    <h4>{item.strIngredient14 ? (item.strIngredient14 + ' :  ' + item.strMeasure14) : (null)}</h4>
                    <h4>{item.strIngredient15 ? (item.strIngredient15 + ' :  ' + item.strMeasure15) : (null)}</h4>

                    <div className='drink__instructions'>
                        <h2>Instructions: </h2>
                        <p><h4>{item.strInstructionsES ? (item.strInstructionsES) : (item.strInstructions)}</h4></p>
                        <h2>{item.dateModified ? ('Modification date: ') : ('')}</h2>
                        <h4> {item.dateModified}</h4>
                        <Button e={() => (click('filter.php?c=Cocktail'))} text='Back'/>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Drink;