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
            int mensagemId)
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

            return new ContatoResponseDto
            {
                ColaboradorId = colaborador.Id,
                Colaborador = colaborador.Nome,
                WhatsApp = colaborador.WhatsApp,
                MensagemId = mensagem.Id,
                Mensagem = mensagem.Mensagem
            };
        }
    }
}
