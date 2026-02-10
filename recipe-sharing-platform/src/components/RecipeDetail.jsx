import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <div className="container mx-auto p-4 text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Link to="/" className="inline-block mb-4 text-blue-500 hover:text-blue-700">
                ← Back to Home
            </Link>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                    <p className="text-gray-600 mb-6">{recipe.summary}</p>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="text-gray-700">{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
