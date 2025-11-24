import { useState } from "react";
import './style.scss';

export default function AddTaskModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [observacao, setObservacao] = useState("");
  const handleSubmit = () => {
    if (!title.trim()) return;

    // Aqui você faria o POST na API
    // fetch("https://localhost:5001/api/tarefas", { ... })

    console.log("Tarefa enviada:", title);

    onClose(); 
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Adicionar Tarefa</h2>


        <h1>Tarefa</h1>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br></br>
        <h1>Observação</h1>
         <input
          type="text"
          placeholder="Observação"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />

        <div className="buttons">
          <button onClick={onClose} className="cancel">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="confirm">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
