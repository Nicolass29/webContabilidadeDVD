using System.ComponentModel.DataAnnotations.Schema;

namespace webContabilidadeDVD.Server.Models
{
    [Table("colaboradores")]
    public class Colaboradores
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string WhatsApp { get; set; } = string.Empty;
    }
}
