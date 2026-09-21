namespace webContabilidadeDVD.Server.Service.Dto
{
    public class ValidarCupomRequestDto
    {
        public string Codigo { get; set; } = string.Empty;
        public int PlanoId { get; set; }
        public string Periodicidade { get; set; } = string.Empty; // "Mensal" ou "Anual"
    }
}
