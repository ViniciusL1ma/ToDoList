import './index.scss';
import mais from '../../assets/image/mais.png'
import editar from '../../assets/image/editar-texto.png'
import excluir from '../../assets/image/lata-de-lixo.png'
import AddTaskModal from '../../components/PopupCreate';
import AddTaskModalEdit from '../../components/PopUpEdit';
import { useState } from "react";
import axios from 'axios';

export default function Index() {
 const [open, setOpen] = useState(false);


  return (
    <section className="container-All">

        <section classsName="container-Center">
          <div className='cabecalho'>
          <div className='name-Program'>
            <h1>To Do List</h1>
          </div>

            <div className='create'>
               <button onClick={() => setOpen(true)}>
                <img src={mais} alt='icon' width={23} />
                Criar
                </button>
                {open && (
               <AddTaskModal onClose={() => setOpen(false)} />
              )}
              </div>
              <div className='edit'>
              <button onClick={() => setOpen(true)}>
                <img src={editar} alt='icon-edit' width={23}/>
                Editar</button>
                {open && (
               <AddTaskModalEdit onClose={() => setOpen(false)} />
              )}
              </div>
              <div className='delete'>
              <button>
                <img src={excluir} alt='icon-delete' width={23}/>
                Deletar</button>
              </div>
          </div>
          <section className='space-ghost'></section>
          <section className='collumns-List'>
            <div className='name-task'>
            <h1> Tarefa</h1>
            </div>
            <div className='obs-task'>
            <h1>Observação</h1>
            </div>
            <div className='prevision-task'> 
            <h1 >Conclusão</h1>
            </div>
           
          </section>
          <hr className='line'></hr>
        </section>



    </section>
  );
}


