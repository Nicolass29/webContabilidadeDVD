using System.Collections.Generic;
namespace webContabilidadeDVD.Server.Models
{
    public class Plano
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public bool Ativo { get; set; } = true;

        // Controla a ordem de exibição dos cards de plano no site
        public int Ordem { get; set; }

        // Marca o plano em destaque (ex: "Mais popular")
        public bool Destaque { get; set; } = false;

        public ICollection<PlanoPreco> Precos { get; set; } = new List<PlanoPreco>();
        public ICollection<PlanoFeature> Features { get; set; } = new List<PlanoFeature>();
    }
}
