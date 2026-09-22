using Microsoft.EntityFrameworkCore;
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
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.AddDbContext<ApiContext>(options =>
                options.UseNpgsql(
                    builder.Configuration.GetConnectionString("DefaultConnection")));
            var corsPolicy = "default";
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(corsPolicy, policy =>
                {
                    policy.AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                });
            });

            builder.Services.AddControllers();
            builder.Services.Configure<SupersetOptions>(
            builder.Configuration.GetSection("Superset"));
            var app = builder.Build();

            app.UseHttpsRedirection();
            app.UseCors(corsPolicy);
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.MapControllers();
            app.MapFallbackToFile("/index.html");
            app.Run();
        }
    }
}
