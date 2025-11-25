using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoToDoList.data;
using ProjetoToDoList.models;

namespace ProjetoToDoList
{
    [ApiController]
    [Route("api/[controller]")]
    public class TarefasController : ControllerBase
    {
        private readonly ApiDbContext _apiDnContext;

        public TarefasController(ApiDbContext apiDbContext)
        {
            _apiDnContext = apiDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddTarefa([FromBody]Tarefa 
        tarefa)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _apiDnContext.DBT.Add(tarefa);
            await _apiDnContext.SaveChangesAsync();

            return Ok(tarefa);
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Tarefa>>> GetTarefa()
        {
            var tarefas = await _apiDnContext.DBT.ToListAsync();

            return Ok(tarefas);
        }

        [HttpGet("{Id}")]

        public async Task<ActionResult<Tarefa>> GetTarefa(int Id)
        {
            var tarefas = await _apiDnContext.DBT.FindAsync(Id);

            if (tarefas == null)
            {
                return NotFound("Tarefa não encontrada!");
            }
            return Ok(tarefas);
        }

       [HttpPut("{Id}")]
        public async Task<IActionResult> UpdateTarefa(int Id, [FromBody] Tarefa tarefaAtualizado)
        {   
    var tarefaExistente = await _apiDnContext.DBT.FindAsync(Id);

    if (tarefaExistente == null)
        return NotFound("Tarefa não encontrada!");

    if (!string.IsNullOrEmpty(tarefaAtualizado.Titulo))
        tarefaExistente.Titulo = tarefaAtualizado.Titulo;

    if (tarefaAtualizado.Observacao != null)
        tarefaExistente.Observacao = tarefaAtualizado.Observacao;

    await _apiDnContext.SaveChangesAsync();

    return Ok(tarefaExistente);
        }


        [HttpDelete("{Id}")]

        public async Task<IActionResult> DeleteTarefa(int Id)
        {
            var tarefa = await _apiDnContext.DBT.FindAsync(Id);

            if (tarefa == null)
            {
                return NotFound("Tarefa não encontrada!");
            }

            _apiDnContext.DBT.Remove(tarefa);

            await _apiDnContext.SaveChangesAsync();

            return Ok("Tarefa Deletada com sucesso!");
        }
    }
}