import React from 'react';
import { Recipe } from '../types/recipie';

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="bg-white rounded shadow p-4">
      {recipe.image_url && (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded mb-4">
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p className="text-sm text-gray-600 mt-1">
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <p className="text-sm mt-1">
        <strong>Steps:</strong> {recipe.steps}
      </p>
    </div>
  );
}
