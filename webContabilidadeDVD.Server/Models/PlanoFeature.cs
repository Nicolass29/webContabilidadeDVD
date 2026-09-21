namespace webContabilidadeDVD.Server.Models
{
    public class PlanoFeature
    {
        public int Id { get; set; }

        public int PlanoId { get; set; }
        public Plano? Plano { get; set; }

        public string Descricao { get; set; } = string.Empty;

        // Permite montar tabela comparativa com check/x por plano
        public bool Incluido { get; set; } = true;

        // Ordem de exibição dentro do card do plano
        public int Ordem { get; set; }
    }
}
