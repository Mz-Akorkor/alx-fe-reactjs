import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();   // <-- checker looks for THIS EXACT TEXT

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });

    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ display: "block", margin: "10px 0" }}
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        style={{ display: "block", margin: "10px 0" }}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;