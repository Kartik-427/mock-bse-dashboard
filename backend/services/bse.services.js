import axios from "axios";

const bseApi = axios.create({
  baseURL: "http://localhost:5000/api/bse",
  timeout: 30000,
});

export default bseApi;

export const fetchClients = async () => {
  const response = await bseApi.get("/clients");
  return response.data;
};

export const fetchTrades = async () => {
  const response = await bseApi.get("/trades");
  return response.data;
};


export const fetchEmployees = async () => {
  const response = await bseApi.get("/employees");
  return response.data;
};

export const fetchMappings = async () => {
  const response = await bseApi.get("/mappings");
  return response.data;
};

