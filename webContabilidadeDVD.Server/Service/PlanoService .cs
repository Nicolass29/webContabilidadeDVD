using webContabilidadeDVD.Server.Data;
using webContabilidadeDVD.Server.Models;
using webContabilidadeDVD.Server.Service.Dto;
using Microsoft.EntityFrameworkCore;

namespace webContabilidadeDVD.Server.Service
{
    public class PlanoService : IPlanoService
    {
        private readonly ApiContext _db;

        public PlanoService(ApiContext db)
        {
            _db = db;
        }

        public async Task<List<PlanoDto>> ListarAtivosAsync()
        {
            var planos = await _db.Planos
                .Where(p => p.Ativo)
                .OrderBy(p => p.Ordem)
                .Include(p => p.Precos)
                .Include(p => p.Features)
                .ToListAsync();

            return planos.Select(MapToDto).ToList();
        }

        public async Task<PlanoDto?> ObterPorIdAsync(int id)
        {
            var plano = await _db.Planos
                .Include(p => p.Precos)
                .Include(p => p.Features)
                .FirstOrDefaultAsync(p => p.Id == id && p.Ativo);

            return plano is null ? null : MapToDto(plano);
        }

        private static PlanoDto MapToDto(Plano plano)
        {
            return new PlanoDto
            {
                Id = plano.Id,
                Nome = plano.Nome,
                Descricao = plano.Descricao,
                Destaque = plano.Destaque,
                Precos = plano.Precos
                    .OrderBy(pr => pr.Periodicidade)
                    .Select(pr => new PlanoPrecoDto
                    {
                        Periodicidade = pr.Periodicidade.ToString(),
                        Valor = pr.Valor,
                        ValorOriginal = pr.ValorOriginal
                    })
                    .ToList(),
                Features = plano.Features
                    .OrderBy(f => f.Ordem)
                    .Select(f => new PlanoFeatureDto
                    {
                        Descricao = f.Descricao,
                        Incluido = f.Incluido
                    })
                    .ToList()
            };
        }
    }
}
