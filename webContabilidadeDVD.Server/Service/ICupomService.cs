using webContabilidadeDVD.Server.Models;
using webContabilidadeDVD.Server.Service.Dto;

namespace webContabilidadeDVD.Server.Service
{
    public interface ICupomService
    {
        // Valida o cupom e calcula o valor final em cima do preço informado.
        // Não altera nada no banco (sem cobrança envolvida ainda) além do controle de uso, se aplicável.
        Task<CupomValidacaoResultDto> ValidarEAplicarAsync(string codigo, int planoId, Periodicidade periodicidade);
    }
}
