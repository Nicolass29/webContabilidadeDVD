using Microsoft.AspNetCore.Mvc;
using webContabilidadeDVD.Server.Models;
using webContabilidadeDVD.Server.Service;
using webContabilidadeDVD.Server.Service.Dto;


namespace webContabilidadeDVD.Server.Controllers
{
    [ApiController]
    [Route("api/cupons")]
    public class CupomController : ControllerBase
    {
        private readonly ICupomService _cupomService;

        public CupomController(ICupomService cupomService)
        {
            _cupomService = cupomService;
        }

        // POST /api/cupons/validar
        [HttpPost("validar")]
        public async Task<IActionResult> Validar([FromBody] ValidarCupomRequestDto request)
        {
            if (string.IsNullOrWhiteSpace(request.Codigo))
                return BadRequest("Código do cupom é obrigatório");

            if (!Enum.TryParse<Periodicidade>(request.Periodicidade, ignoreCase: true, out var periodicidade))
                return BadRequest("Periodicidade inválida. Use 'Mensal' ou 'Anual'");

            var resultado = await _cupomService.ValidarEAplicarAsync(request.Codigo, request.PlanoId, periodicidade);

            // Devolve 200 mesmo quando o cupom é inválido - o front decide o que exibir
            // com base no campo "Valido" e "Motivo", sem precisar tratar erro HTTP.
            return Ok(resultado);
        }
    }
}
