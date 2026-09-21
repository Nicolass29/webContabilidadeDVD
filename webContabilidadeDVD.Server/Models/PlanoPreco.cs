namespace webContabilidadeDVD.Server.Models

{

    public enum Periodicidade
    {
        Mensal = 1,
        Anual = 2
    }
    public class PlanoPreco
    {
        public int Id { get; set; }

        public int PlanoId { get; set; }
        public Plano? Plano { get; set; }

        public Periodicidade Periodicidade { get; set; }

        // Valor efetivamente cobrado
        public decimal Valor { get; set; }

        // Valor "de", usado para mostrar desconto (ex: R$ 199 -> R$ 149).
        // Deixe null se não houver desconto nesse preço.
        public decimal? ValorOriginal { get; set; }
    }
}
