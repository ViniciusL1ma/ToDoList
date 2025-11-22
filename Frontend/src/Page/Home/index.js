import './index.scss';
//import { useState } from "react";
//import axios from 'axios';

export default function Index() {
  
  
  
  
  return (
    <section className="container-All">
        <section classsName="container-Center">
          <div className='cabecalho'>

            <h2 className='name-Program'>To Do List</h2>
            <button className='create'> Criar</button>
            <button className='edit'>Editar</button>
            <button className='delete'>Deletar</button>

          </div>
          <div className='collumns-List'>
            <h2 className='name-task'> Tarefa</h2>
            <h2 className='obs-task'>Observação</h2>
            <h2 className='prevision-task'>Conclusao</h2>

          </div>

        </section>



    </section>
  );
}


