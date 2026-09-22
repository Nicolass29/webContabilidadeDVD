namespace webContabilidadeDVD.Server.Models
{
    public class ContatoAtendimento
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string NumeroWhatsapp { get; set; } = string.Empty;
        public bool Ativo { get; set; } = true;
        public bool IsPrincipal { get; set; } = false;
    }
}
