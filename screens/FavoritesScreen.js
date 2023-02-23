import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { Text } from "react-native"
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

function FavoritesScreen(){
    const favoriteMealIds =  useSelector((state) => state.favoritesMeals.ids);
    
    const favoriteMeals = MEALS.filter(meal => 
        favoriteMealIds.includes(meal.id))
    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;