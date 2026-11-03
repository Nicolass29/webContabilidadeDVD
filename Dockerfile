# 1) Build do React
FROM node:20-alpine AS client
WORKDIR /src/client
COPY webcontabilidadedvd.client/package*.json ./
RUN npm ci
COPY webcontabilidadedvd.client/ ./
RUN npm run build

# 2) Publish da API
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS server
WORKDIR /src
COPY . .
RUN dotnet remove webContabilidadeDVD.Server/webContabilidadeDVD.Server.csproj reference webcontabilidadedvd.client/webcontabilidadedvd.client.esproj \
 && dotnet publish webContabilidadeDVD.Server/webContabilidadeDVD.Server.csproj -c Release -o /app
COPY --from=client /src/client/dist /app/wwwroot

# 3) Imagem final
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=server /app ./
CMD ["sh", "-c", "ASPNETCORE_URLS=http://0.0.0.0:${PORT:-8080} dotnet webContabilidadeDVD.Server.dll"]