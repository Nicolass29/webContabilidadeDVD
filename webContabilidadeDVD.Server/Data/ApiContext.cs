using Microsoft.EntityFrameworkCore;
using webContabilidadeDVD.Server.Models;
namespace webContabilidadeDVD.Server.Data
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {}
        public DbSet<Plano> Planos { get; set; }
        public DbSet<PlanoPreco> PlanoPrecos { get; set; }
        public DbSet<PlanoFeature> PlanoFeatures { get; set; }
        public DbSet<Cupom> Cupons { get; set; }
        public DbSet<Lead> Leads { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Relacionamentos: um Plano tem vários Preços e várias Features
            modelBuilder.Entity<Plano>()
                .HasMany(p => p.Precos)
                .WithOne(pp => pp.Plano)
                .HasForeignKey(pp => pp.PlanoId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Plano>()
                .HasMany(p => p.Features)
                .WithOne(f => f.Plano)
                .HasForeignKey(f => f.PlanoId)
                .OnDelete(DeleteBehavior.Cascade);

            // Um plano não pode ter dois preços para a mesma periodicidade
            modelBuilder.Entity<PlanoPreco>()
                .HasIndex(pp => new { pp.PlanoId, pp.Periodicidade })
                .IsUnique();

            // Código de cupom deve ser único
            modelBuilder.Entity<Cupom>()
                .HasIndex(c => c.Codigo)
                .IsUnique();

            base.OnModelCreating(modelBuilder);
        }
    }
}
