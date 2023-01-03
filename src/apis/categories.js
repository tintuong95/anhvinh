import axios from "../utils/axios";

export const getAllCategory = () => axios.get("/category");

export const getCategoryDetails = (id) => axios.get("/category/" + id);

export const createCategory = (data) => axios.post("/category", data);

export const updateCategory = (id, data) => axios.put("/category/" + id, data);

export const deleteCategory = (id) => axios.delete("/category/" + id);
