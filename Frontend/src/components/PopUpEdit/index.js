import { useState, useEffect } from "react";
import './index.scss';
import axios from "axios";

export default function AddTaskModalEdit({ onClose, tarefa, onUpdate }) {
  const [titulo, setTitulo] = useState(tarefa?.Tarefas || "");
  const [observacao, setObservacao] = useState(tarefa?.Observacao || "");

  useEffect(() => {
    setTitulo(tarefa?.Tarefas || "");
    setObservacao(tarefa?.Observacao || "");
  }, [tarefa]);

  const handleSubmit = async () => {
    if (!titulo.trim()) return;

    try {
      const resposta = await axios.put(
        `http://localhost:5274/api/Tarefas/${tarefa.id}`,
        {
          Titulo: titulo,
          Observacao: observacao
        }
      );

      console.log("Tarefa editada:", resposta.data);
      onUpdate(resposta.data); // atualiza a lista no componente principal
      onClose();
    } catch (erro) {
      console.error("Erro ao editar:", erro.response?.data || erro);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Editar Tarefa</h2>

        <h1>Tarefa</h1>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <h1>Observação</h1>
        <input
          type="text"
          placeholder="Observação"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />

        <div className="buttons">
          <button onClick={onClose} className="cancel">Cancelar</button>
          <button onClick={handleSubmit} className="confirm">Editar</button>
        </div>
      </div>
    </div>
  );
}
