import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (!formData.ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required';
        } else {
            const ingredientList = formData.ingredients.split('\n').filter(i => i.trim());
            if (ingredientList.length < 2) {
                newErrors.ingredients = 'Please provide at least 2 ingredients';
            }
        }

        if (!formData.steps.trim()) {
            newErrors.steps = 'Preparation steps are required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Recipe submitted successfully!');
            setFormData({ title: '', ingredients: '', steps: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Enter recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
                        Ingredients (one per line)
                    </label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Enter ingredients (at least 2)"
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
                        Preparation Steps
                    </label>
                    <textarea
                        id="steps"
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.steps ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Enter preparation steps"
                    />
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
