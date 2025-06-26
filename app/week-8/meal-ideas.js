"use client"

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas()
    }, [ingredient])


    return(
        <div>
            <h3>Meal Ideas</h3>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
        );
}        
            


async function fetchMealIdeas(ingredient){

    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if(!response.ok){
            console.log(response.status);
        }
        const data = await response.json();
        console.log(data);
        if (data.meals){
            return data.meals;
        }else {
            return [];
        }
    
    } catch (error){
        return [];
    }
    
}
    