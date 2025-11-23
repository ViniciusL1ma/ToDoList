using Microsoft.EntityFrameworkCore;
using ProjetoToDoList.models;

namespace ProjetoToDoList.data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions options) : base(options){}
        public DbSet<Tarefa> DBT {get; set;}
    }
}