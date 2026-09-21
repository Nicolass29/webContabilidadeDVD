using System;
namespace webContabilidadeDVD.Server.Models
{

    public enum TipoDesconto
    {
        Percentual = 1,
        ValorFixo = 2
    }
    public class Cupom
    {
        public int Id { get; set; }

        public string Codigo { get; set; } = string.Empty; // ex: "BLACKFRIDAY20"

        public TipoDesconto Tipo { get; set; }
        public decimal Valor { get; set; } // 20 (%) ou 50.00 (R$), dependendo do Tipo

        public DateTime? ValidoAte { get; set; }
        public bool Ativo { get; set; } = true;

        // Controle de uso (opcional, útil se quiser limitar quantidade de usos)
        public int? LimiteUso { get; set; }
        public int UsosAtuais { get; set; } = 0;
    }
}
