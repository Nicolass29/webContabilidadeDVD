namespace webContabilidadeDVD.Server.Service.Dto
{
    public class ContatoResponseDto
    {
        public int ColaboradorId { get; set; }
        public string Colaborador { get; set; } = string.Empty;
        public string WhatsApp { get; set; } = string.Empty;
        public int MensagemId { get; set; }
        public string Mensagem { get; set; } = string.Empty;
    }
}
