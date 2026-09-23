using webContabilidadeDVD.Server.Service.Dto;

namespace webContabilidadeDVD.Server.Service
{
    public interface IContatoService
    {
        Task<ContatoResponseDto?> ObterContato(
            int colaboradorId,
            int mensagemId,
            string? plano = null,
            string? periodicidade = null,
            decimal? valor = null);
    }
}