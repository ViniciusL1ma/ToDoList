import axios from "axios";

const API_URL = "http://localhost:5274/api/Tarefas"; // URL do backend

// Listar todas as tarefas
export const getTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Criar nova tarefa
export const createTodo = async (tarefa) => {
  const response = await axios.post(API_URL, tarefa);
  return response.data;
};

// Atualizar tarefa
export const updateTodo = async (id, tarefaAtualizada) => {
  const res = await axios.put(`${API_URL}/${id}`, tarefaAtualizada);
  return res.data;
};

// Deletar tarefa
export const deleteTodo = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
