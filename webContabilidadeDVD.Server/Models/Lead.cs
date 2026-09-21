namespace webContabilidadeDVD.Server.Models
{
    public class Lead
    {
        public int Id { get; set; }

        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? Telefone { get; set; }
        public string? Mensagem { get; set; }

        // De qual plano o visitante demonstrou interesse (opcional)
        public int? PlanoId { get; set; }
        public Plano? Plano { get; set; }

        public DateTime CriadoEm { get; set; } = DateTime.UtcNow;
    }
}
