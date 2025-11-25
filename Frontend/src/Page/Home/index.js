import './index.scss';
import mais from '../../assets/image/mais.png';
import editar from '../../assets/image/editar-texto.png';
import excluir from '../../assets/image/lata-de-lixo.png';
import AddTaskModalCreate from '../../components/PopupCreate';
import AddTaskModalEdit from '../../components/PopUpEdit';
import React, { useState, useEffect } from "react";
import pesquisa from '../../assets/image/lupa.png';
import { getTodos, updateTodo, deleteTodo } from "../../services/allServices";

export default function Index() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  useEffect(() => {
    const fetchTarefas = async () => {
      const tarefasDoBackend = await getTodos();
      setTodos(tarefasDoBackend);
    };
    fetchTarefas();
  }, []);

  const adicionarTarefa = (tarefaNova) => {
    setTodos(prev => [...prev, tarefaNova]);
  };

  const handleUpdate = (tarefaAtualizada) => {
    setTodos(todos.map(t => t.id === tarefaAtualizada.id ? tarefaAtualizada : t));
  };

  const toggleComplete = async (tarefa) => {
    try {
      const updated = await updateTodo(tarefa.id, { ...tarefa, conclusao: !tarefa.conclusao });
      setTodos(todos.map(t => t.id === tarefa.id ? updated : t));
    } catch (error) {
      console.error("Erro ao atualizar conclusão:", error);
    }
  };

  const handleDeleteSelected = async () => {
    if (!selectedTasks.length) return;
    const confirmDelete = window.confirm(`Deseja deletar ${selectedTasks.length} tarefa(s)?`);
    if (!confirmDelete) return;

    try {
      for (const id of selectedTasks) {
        await deleteTodo(id);
      }
      setTodos(todos.filter(t => !selectedTasks.includes(t.id)));
      setSelectedTasks([]);
      setDeleteMode(false);
    } catch (error) {
      console.error("Erro ao deletar tarefas:", error);
    }
  };

  async function handleSubmit() {
  const novaTarefa = await createTodo({
    Titulo: title,
    Observacao: observacao, 
    Conclusao: false
  });

  onCreate(novaTarefa);
  onClose();
};


  return (
    <section className="container-All">
      <section classsName="container-Center">
        <div className='cabecalho'>
          <div className='name-Program'>
            <h1>To Do List</h1>
          </div>

          <div className="create">
            <button onClick={() => setOpen(true)}>
              <img src={mais} alt='icon' width={23} /> Criar
            </button>
            {open && <AddTaskModalCreate onClose={() => setOpen(false)} onCreate={adicionarTarefa} />}
          </div>

          <div className='delete'>
            <button className='delete-question' onClick={() => setDeleteMode(!deleteMode)}>
              <img src={excluir} alt='icon-delete' width={23}/>
              {deleteMode ? "Cancelar" : "Deletar"}
            </button>
            {deleteMode && selectedTasks.length > 0 && (
              <button className='delete-confirm' onClick={handleDeleteSelected}>
                Confirmar Delete
              </button>
            )}
          </div>
        </div>

        <section className='collumns-List'>
          <div className='name-task'><h1>Tarefa</h1></div>
          <div className='obs-task'><h1>Observação</h1></div>
          <div className='prevision-task'><h1>Conclusão</h1></div>
          <div className='edit-task'><h1>Editar</h1></div>
        </section>

        {todos.map((tarefa) => (
          <section key={tarefa.id} className="line-task">
            {deleteMode && (
              <input
                type="checkbox"
                checked={selectedTasks.includes(tarefa.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedTasks([...selectedTasks, tarefa.id]);
                  } else {
                    setSelectedTasks(selectedTasks.filter(id => id !== tarefa.id));
                  }
                }}
              />
            )}

            <div className='title-task'><h1>{tarefa.titulo}</h1></div>
            <div className='obs-task'><p>{tarefa.observacao}</p></div>

            <label className='checkbox-container'>
              <input
                type='checkbox'
                className='check'
                checked={tarefa.conclusao}
                onChange={() => toggleComplete(tarefa)}
              />
              <span className='checkmark'></span>
            </label>

            <div className='edit'>
              <button onClick={() => { 
                setTarefaSelecionada(tarefa); 
                setOpenEdit(true); 
              }}>
                <img src={editar} alt='icon-edit' width={23}/>
              </button>
            </div>
          </section>
        ))}

        {openEdit && tarefaSelecionada && (
          <AddTaskModalEdit
            onClose={() => setOpenEdit(false)}
            tarefa={tarefaSelecionada}
            onUpdate={handleUpdate}
          />
        )}
      </section>
    </section>
  );
}
