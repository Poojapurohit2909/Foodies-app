import RecipeList from '../components/RecipeList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🍲 All Recipes</h1>
      <RecipeList />
    </div>
  );
}
