import React, { useEffect, useState } from 'react';
import { MdCheckBox } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const getMealFromId = async (recipeId) => {
    const response = await axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    return response.data
}



const CardFoodDetail = () => {
    const { recipeId } = useParams();
    const [meal, setMeal] = useState({ name: '', img: '' });
    const [ingredients, setIngredients] = useState([]);
    const [measure, setMeasure] = useState([]);

    const getIngredients = (meal) => {
        for (const [key, value] of Object.entries(meal)) {
            if (key.includes('Ingredient') && value) {
                setIngredients((prev) => [...prev, value]);
            }
        }
    };

    const getMeasure = (meal) => {
        for (const [key, value] of Object.entries(meal)) {
            if (key.includes('Measure') && value) {
                setMeasure((prev) => [...prev, value]);
            }
        }
    };

    const getMealsFromId = (id) => {
        getMealFromId(id).then((res) => {
            const meal = res.meals[0];
            setMeal({ name: meal.strMeal, img: meal.strMealThumb });
            getIngredients(meal);
            getMeasure(meal);
        });
    };

    useEffect(() => {
        getMealsFromId(recipeId);
    }, [recipeId]);

    return (
        <div className='card-info'>
            <img className='img-info' src={meal.img} alt='food' className='img-info' />
            <div className='card-body-info'>
                <h1 >{meal.name}</h1>
                <h4 >Ingredients</h4>
                <div className='ingredients'>
                    {ingredients.map((ingredient, index) => (
                        <span key={index}>
                            <i class="far fa-check-square check-box"></i> 
                            {measure[index]} {ingredient}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardFoodDetail;