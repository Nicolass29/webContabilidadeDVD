namespace webContabilidadeDVD.Server.Service.Dto
{
    public class PlanoDto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public bool Destaque { get; set; }
        public List<PlanoPrecoDto> Precos { get; set; } = new();
        public List<PlanoFeatureDto> Features { get; set; } = new();
    }

    public class PlanoPrecoDto
    {
        public string Periodicidade { get; set; } = string.Empty; // "Mensal" ou "Anual"
        public decimal Valor { get; set; }
        public decimal? ValorOriginal { get; set; }
    }

    public class PlanoFeatureDto
    {
        public string Descricao { get; set; } = string.Empty;
        public bool Incluido { get; set; }
    }

    // Resultado de aplicar um cupom em cima de um preço de plano
    public class CupomValidacaoResultDto
    {
        public bool Valido { get; set; }
        public string? Motivo { get; set; } // preenchido quando Valido = false (ex: "Cupom expirado")
        public decimal ValorOriginal { get; set; }
        public decimal ValorComDesconto { get; set; }
        public decimal DescontoAplicado { get; set; }
    }
}
