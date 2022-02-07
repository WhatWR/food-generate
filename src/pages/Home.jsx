import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SeachNav from '../components/SeachNav';




const Home = () => {
    const [value, setValue] = useState('')
    const [meals, setMeals] = useState([])
    useEffect(() => {
        getMealFromSearching(value)
    }, [])
    const getMealFromSearching = async (searchValue) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        setMeals(response.data.meals)


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
                    <Link key={meal.idMeal} to={`/recipes/${meal.idMeal}`}><Card

                        img={meal.strMealThumb}
                        title={meal.strMeal}
                    /></Link>


                ))}

            </div>
        </div>)





        ;
};

export default Home;

