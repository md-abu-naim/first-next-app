"use client";
import { useEffect, useState } from "react";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchMeals = async() => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json()
            setMeals(data.meals)
        }

        fetchMeals()
    }, [search])
    return (
        <div>
            <h1 className="text-5xl">Meals Page</h1>
            <div>
                <input onChange={e => setSearch(e.target.value)} type="text" value={search} className="input" />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    meals?.map(meal => <div key={meal.idMeal}>
                        <h1 className="text-xl">{meal.strMeal}</h1>
                        <p>{meal?.strInstructions}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Meals;