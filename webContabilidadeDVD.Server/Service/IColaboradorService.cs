using webContabilidadeDVD.Server.Service.Dto;

namespace webContabilidadeDVD.Server.Service
{
    public interface IColaboradorService
    {
        Task<List<ColaboradorDto>> ObterColaboradores();
    }
}
