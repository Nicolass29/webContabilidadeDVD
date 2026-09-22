using System.ComponentModel.DataAnnotations.Schema;

namespace webContabilidadeDVD.Server.Models
{
    [Table("mensagens")]
    public class Mensagens
    {
        public int Id { get; set; }
        public string Mensagem { get; set; } = string.Empty;
    }
}
