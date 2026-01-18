import { create } from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    favorites: [],
    recommendations: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),
    setSearchTerm: (term) => set({ searchTerm: term }),
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
    addRecipe: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newRecipe],
        filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id),
        filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
        favorites: state.favorites.filter(favoriteId => favoriteId !== id)
    })),
    updateRecipe: (updatedRecipe) => set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
        filteredRecipes: state.filteredRecipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),
    setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes })
}));

export { useRecipeStore };
