import { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=0034e9f5880b48c3bc6600cb0ede20b4&number=9"
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular?.map((recipe) => {
        return <p>{recipe.title}</p>;
      })}
    </div>
  );
};

export default Popular;
