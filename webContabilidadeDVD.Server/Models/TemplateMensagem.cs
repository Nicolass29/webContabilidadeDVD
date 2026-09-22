namespace webContabilidadeDVD.Server.Models
{
    public class TemplateMensagem
    {
        public int Id { get; set; }
        public string ChaveIdentificadora { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public string TextoTemplate { get; set; } = string.Empty;
    }
}
