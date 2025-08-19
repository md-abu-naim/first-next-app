import Image from "next/image";
import SearchInput from "./Components/SearchInput";
import { Roboto } from "next/font/google";

export const metadata = {
    title: "All Meals || Learning Next.js",
    description: "In this page fetching all meals data",
};

const roboto = Roboto({
  weight: ['400', '600', '700',],
  subsets: ["latin"],
})

const Meals = async ({ searchParams }) => {
    const query = searchParams
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
    const data = await res.json()
    const meals = data.meals


    return (
        <div>
            <h1 className="text-5xl">Meals Page</h1>
            <SearchInput />
            <div className={`grid grid-cols-3 gap-4 bg-color ${roboto.className}`}>
                {
                    meals?.map(meal => <div key={meal.idMeal}>
                        <Image src={meal?.strMealThumb} width={641} height={644} alt={meal.strMeal} />
                        <h1 className="text-xl">{meal.strMeal}</h1>
                        <p>{meal?.strInstructions}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Meals;