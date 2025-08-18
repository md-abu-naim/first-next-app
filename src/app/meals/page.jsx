import SearchInput from "./Components/SearchInput";

const Meals = async ({ searchParams }) => {
    const query = searchParams
    console.log(searchParams);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
    const data = await res.json()
    console.log(data);
    const meals  = data.meals

    
    return (
        <div>
            <h1 className="text-5xl">Meals Page</h1>
            <SearchInput />
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