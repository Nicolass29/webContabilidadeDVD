using webContabilidadeDVD.Server.Service.Dto;

namespace webContabilidadeDVD.Server.Service
{
    public interface IPlanoService
    {
        Task<List<PlanoDto>> ListarAtivosAsync();
        Task<PlanoDto?> ObterPorIdAsync(int id);
    }
}
