import axios from "axios";

export const getCategorias = async () => {
  try {
    const response = await axios.get("/src/json/Categorias.json");
    return response.data;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return [];
  }
};
