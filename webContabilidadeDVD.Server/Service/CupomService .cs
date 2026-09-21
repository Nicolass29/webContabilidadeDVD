using webContabilidadeDVD.Server.Data;
using webContabilidadeDVD.Server.Models;
using webContabilidadeDVD.Server.Service.Dto;
using Microsoft.EntityFrameworkCore;

namespace webContabilidadeDVD.Server.Service
{
    public class CupomService : ICupomService
    {
        private readonly ApiContext _db;

        public CupomService(ApiContext db)
        {
            _db = db;
        }

        public async Task<CupomValidacaoResultDto> ValidarEAplicarAsync(string codigo, int planoId, Periodicidade periodicidade)
        {
            var preco = await _db.PlanoPrecos
                .FirstOrDefaultAsync(p => p.PlanoId == planoId && p.Periodicidade == periodicidade);

            if (preco is null)
            {
                return new CupomValidacaoResultDto
                {
                    Valido = false,
                    Motivo = "Plano ou periodicidade inválidos"
                };
            }

            var cupom = await _db.Cupons
                .FirstOrDefaultAsync(c => c.Codigo == codigo && c.Ativo);

            if (cupom is null)
            {
                return new CupomValidacaoResultDto
                {
                    Valido = false,
                    Motivo = "Cupom não encontrado ou inativo",
                    ValorOriginal = preco.Valor,
                    ValorComDesconto = preco.Valor,
                    DescontoAplicado = 0
                };
            }

            if (cupom.ValidoAte.HasValue && cupom.ValidoAte.Value < DateTime.UtcNow)
            {
                return new CupomValidacaoResultDto
                {
                    Valido = false,
                    Motivo = "Cupom expirado",
                    ValorOriginal = preco.Valor,
                    ValorComDesconto = preco.Valor,
                    DescontoAplicado = 0
                };
            }

            if (cupom.LimiteUso.HasValue && cupom.UsosAtuais >= cupom.LimiteUso.Value)
            {
                return new CupomValidacaoResultDto
                {
                    Valido = false,
                    Motivo = "Cupom atingiu o limite de uso",
                    ValorOriginal = preco.Valor,
                    ValorComDesconto = preco.Valor,
                    DescontoAplicado = 0
                };
            }

            var desconto = cupom.Tipo == TipoDesconto.Percentual
                ? preco.Valor * (cupom.Valor / 100m)
                : cupom.Valor;

            // Nunca deixa o valor final ficar negativo
            desconto = Math.Min(desconto, preco.Valor);
            var valorFinal = preco.Valor - desconto;

            return new CupomValidacaoResultDto
            {
                Valido = true,
                ValorOriginal = preco.Valor,
                ValorComDesconto = valorFinal,
                DescontoAplicado = desconto
            };
        }
    }
}
