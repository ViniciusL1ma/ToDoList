using System.ComponentModel.DataAnnotations;

namespace ProjetoToDoList.models
{
    public class Tarefa
    {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Campo obrigadorio")]
        public string Titulo { get; internal set; }

        public string Observacao { get; set; }

        public bool Conclusao { get; set;} = false;
        
    }
}