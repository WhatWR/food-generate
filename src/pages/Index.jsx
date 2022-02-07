import React, { useState } from 'react';
import Card from '../components/Card';
import SeachNav from '../components/SeachNav';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Index = (props) => {
    const [value, setValue] = useState(props.search|| '')
    const [meals, setMeals] = useState([])

    const getMealFromSearching = async (searchValue) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        setMeals(response.data.meals)
        // console.log(response.data);

    };


    return (
        <div>
            <SeachNav
                value={value}
                setValue={setValue}
                onClick={() => getMealFromSearching(value)}
            />


            <div className='contents'>
                {meals.map((meal) => (
                    <Link key ={meal.idMeal} to = {`/recipes/${meal.idMeal}`}><Card
                    
                    img={meal.strMealThumb}
                    title={meal.strMeal}
                /></Link>
                    

                ))}

            </div>
        </div>)
};

export default Index;
