"use client"

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);
    const [noMealsFound, setNoMealsFound] = useState(false);


    const loadMealIdeas = async () => {
        setNoMealsFound(false);
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);

        if (mealIdeas.length === 0){
            setNoMealsFound(true);
        } 
    }

    useEffect(() => {
        loadMealIdeas()
    }, [ingredient])


    return(
        <div className="bg-green-600 p-4 rounded-lg border border-gray-200">
            <h3 className="text-amber-300 text-xl font-bold mb-4">Meal Ideas for {ingredient}</h3>
            {noMealsFound ? (
                <p className="text-amber-300">No meal ideas found for this ingredient. Try another item!</p>
            ) : (
            meals.length > 0 && (
                    <ul>
                        {meals.map(meal => (
                            <li key={meal.idMeal} className="text-amber-300 mb-2 p-2 bg-green-700 rounded-md">
                                {meal.strMeal}
                            </li>
                        ))}
                    </ul>
                )
            )}
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

