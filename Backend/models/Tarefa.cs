using System.ComponentModel.DataAnnotations;

namespace ProjetoToDoList.models
{
    public class Tarefa
    {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Campo obrigadorio")]
        public string Tarefas { get; set; } 

        public string Observacao { get; set; }
    }
}