using webContabilidadeDVD.Server.Data;
using Microsoft.EntityFrameworkCore;
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

            var textoMensagem = mensagem.Mensagem;
            Console.WriteLine(plano);
            if (!string.IsNullOrWhiteSpace(plano))
                textoMensagem = textoMensagem.Replace("{plano}", plano);
            Console.WriteLine(periodicidade);
            if (!string.IsNullOrWhiteSpace(periodicidade))
                textoMensagem = textoMensagem.Replace("{periodicidade}", periodicidade.ToLowerInvariant());
            Console.WriteLine(valor);

            if (valor.HasValue)
                textoMensagem = textoMensagem.Replace(
                    "{valor}",
                    valor.Value.ToString("N2", new System.Globalization.CultureInfo("pt-BR")));

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