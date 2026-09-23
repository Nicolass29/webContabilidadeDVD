using Microsoft.AspNetCore.Mvc;
using webContabilidadeDVD.Server.Service;

namespace webContabilidadeDVD.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        private readonly IContatoService _contatoService;

        public ContatoController(IContatoService contatoService)
        {
            _contatoService = contatoService;
        }

        [HttpGet]
        public async Task<IActionResult> ObterContato(
            [FromQuery] int colaboradorId,
            [FromQuery] int mensagemId,
            [FromQuery] string? plano = null,
            [FromQuery] string? periodicidade = null,
            [FromQuery] decimal? valor = null)
        {
            var contato = await _contatoService.ObterContato(
                colaboradorId,
                mensagemId,
                plano,
                periodicidade,
                valor);

            if (contato == null)
                return NotFound("Colaborador ou mensagem não encontrados.");

            return Ok(contato);
        }
    }
}