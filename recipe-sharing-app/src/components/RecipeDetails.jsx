import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === Number(recipeId))
    );
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);
    const favorites = useRecipeStore(state => state.favorites);
    const isFavorite = favorites.includes(recipe?.id);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {isFavorite ? (
                <button onClick={() => removeFavorite(recipe.id)}>Unfavorite</button>
            ) : (
                <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
            )}
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;
