using Microsoft.EntityFrameworkCore;
using Npgsql;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using webContabilidadeDVD.Server.Data;
using webContabilidadeDVD.Server.Models;
using webContabilidadeDVD.Server.Service;
namespace webContabilidadeDVD.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddScoped<IPlanoService, PlanoService>();
            builder.Services.AddScoped<ICupomService, CupomService>();
            builder.Services.AddScoped<IContatoService, ContatoService>();
            builder.Services.AddScoped<IColaboradorService, ColaboradorService>();

            // add Services to the container.
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            var connectionString = BuildConnectionString(
                builder.Configuration.GetConnectionString("DefaultConnection"));
            builder.Services.AddDbContext<ApiContext>(o => o.UseNpgsql(connectionString));

            builder.Services.AddControllers();
            builder.Services.Configure<SupersetOptions>(builder.Configuration.GetSection("Superset"));

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.MapControllers();
            app.MapFallbackToFile("/index.html");
            app.Run();
        }
        static string BuildConnectionString(string? raw)
        {
            if (string.IsNullOrWhiteSpace(raw))
                throw new InvalidOperationException("ConnectionStrings:DefaultConnection não configurada.");

            if (!raw.StartsWith("postgres://") && !raw.StartsWith("postgresql://"))
                return raw;

            var uri = new Uri(raw);
            var user = uri.UserInfo.Split(':', 2);
            return new NpgsqlConnectionStringBuilder
            {
                Host = uri.Host,
                Port = uri.Port > 0 ? uri.Port : 5432,
                Username = Uri.UnescapeDataString(user[0]),
                Password = Uri.UnescapeDataString(user[1]),
                Database = uri.AbsolutePath.TrimStart('/'),
                SslMode = SslMode.Prefer
            }.ToString();
        }
    }
}
