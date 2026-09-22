using Microsoft.EntityFrameworkCore;
using webContabilidadeDVD.Server.Data;
using webContabilidadeDVD.Server.Service.Dto;

namespace webContabilidadeDVD.Server.Service
{
    public class ColaboradorService : IColaboradorService
    {
        private readonly ApiContext _context;

        public ColaboradorService(ApiContext context)
        {
            _context = context;
        }

        public async Task<List<ColaboradorDto>> ObterColaboradores()
        {
            return await _context.Colaboradores
                .AsNoTracking()
                .Select(x => new ColaboradorDto
                {
                    Id = x.Id,
                    Nome = x.Nome,
                    WhatsApp = x.WhatsApp
                })
                .ToListAsync();
        }
    }
}
