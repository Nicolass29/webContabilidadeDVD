using Microsoft.AspNetCore.Mvc;
using webContabilidadeDVD.Server.Service;

namespace webContabilidadeDVD.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ColaboradorController : ControllerBase
    {
        private readonly IColaboradorService _colaboradorService;

        public ColaboradorController(IColaboradorService colaboradorService)
        {
            _colaboradorService = colaboradorService;
        }

        [HttpGet]
        public async Task<IActionResult> ObterColaboradores()
        {
            var colaboradores = await _colaboradorService.ObterColaboradores();

            return Ok(colaboradores);
        }
    }
}
