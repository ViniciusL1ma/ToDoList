using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> AddTarefa(Tarefa 
        tarefa)
        {
            _apiDnContext.DBT.Add(tarefa);
            await _apiDnContext.SaveChangesAsync();

            return Ok(tarefa);
        }
    }
}