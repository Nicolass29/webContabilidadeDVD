using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.Text.RegularExpressions;
using webContabilidadeDVD.Server.Data;
using webContabilidadeDVD.Server.Service.Dto;

namespace webContabilidadeDVD.Server.Service
{
    public class ContatoService : IContatoService
    {
        private readonly ApiContext _context;

        public ContatoService(ApiContext context)
        {
            _context = context;
        }

        public async Task<ContatoResponseDto?> ObterContato(
            int colaboradorId,
            int mensagemId,
            string? plano = null,
            string? periodicidade = null,
            decimal? valor = null)
        {
            var colaborador = await _context.Colaboradores
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == colaboradorId);

            if (colaborador == null)
                return null;

            var mensagem = await _context.Mensagens
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == mensagemId);

            if (mensagem == null)
                return null;

            // Dicionário com os parâmetros disponíveis
            var parametros = new Dictionary<string, string>
            {
                ["plano"] = plano ?? "",
                ["periodicidade"] = periodicidade?.ToLowerInvariant() ?? "",
                ["valor"] = valor?.ToString(
                    "N2",
                    new CultureInfo("pt-BR")
                ) ?? ""
            };

            // Substituição automática dos parâmetros
            var textoMensagem = Regex.Replace(
                mensagem.Mensagem,
                @"\{(\w+)\}",
                match =>
                {
                    var chave = match.Groups[1].Value;

                    return parametros.TryGetValue(chave, out var valorParametro)
                        ? valorParametro
                        : match.Value;
                }
            );


            return new ContatoResponseDto
            {
                ColaboradorId = colaborador.Id,
                Colaborador = colaborador.Nome,
                WhatsApp = colaborador.WhatsApp,
                MensagemId = mensagem.Id,
                Mensagem = textoMensagem
            };
        }
    }
}