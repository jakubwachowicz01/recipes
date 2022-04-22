import React from "react";

const Recipe = ({title, image, ingredients, directions}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <ol >
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a href={directions}>  Directions  </a>
        </div>
    )
}

export default Recipe


