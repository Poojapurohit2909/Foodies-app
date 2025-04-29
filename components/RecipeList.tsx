'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/SupabaseClient';
import { Recipe } from '../types/recipie';
import RecipeCard from './RecipieCard';

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase.from('recipes').select('*');
      if (error) {
        console.error('Error fetching recipes:', error.message);
      } else {
        setRecipes(data || []);
      }
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  return loading ? (
    <p className="text-center">Loading...</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
