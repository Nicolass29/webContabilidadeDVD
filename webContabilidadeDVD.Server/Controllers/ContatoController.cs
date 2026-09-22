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
            [FromQuery] int mensagemId)
        {
            var contato = await _contatoService.ObterContato(
                colaboradorId,
                mensagemId);

            if (contato == null)
                return NotFound("Colaborador ou mensagem não encontrados.");

            return Ok(contato);
        }
    }
}
