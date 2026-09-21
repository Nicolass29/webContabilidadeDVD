using Microsoft.AspNetCore.Mvc;
using webContabilidadeDVD.Server.Service;

namespace WebContabilidadeDvd.Controllers
{
    [ApiController]
    [Route("api/planos")]
    public class PlanosController : ControllerBase
    {
        private readonly IPlanoService _planoService;

        public PlanosController(IPlanoService planoService)
        {
            _planoService = planoService;
        }

        // GET /api/planos
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var planos = await _planoService.ListarAtivosAsync();
            return Ok(planos);
        }

        // GET /api/planos/5
        [HttpGet("{id:int}")]
        public async Task<IActionResult> ObterPorId(int id)
        {
            var plano = await _planoService.ObterPorIdAsync(id);

            if (plano is null)
                return NotFound();

            return Ok(plano);
        }
    }
}