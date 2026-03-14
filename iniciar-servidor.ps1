# Ejecuta este script DESPUÉS de instalar Node.js desde https://nodejs.org (versión LTS)
# Cierra y reabre la terminal o Cursor antes de ejecutarlo.

$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot

Set-Location $projectRoot

# Comprobar Node
try {
    $nodeVersion = node --version
    Write-Host "Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js no está instalado o no está en el PATH." -ForegroundColor Red
    Write-Host "1. Instala Node.js desde https://nodejs.org (versión LTS)" -ForegroundColor Yellow
    Write-Host "2. Cierra y reabre esta terminal (o Cursor)" -ForegroundColor Yellow
    Write-Host "3. Vuelve a ejecutar este script." -ForegroundColor Yellow
    exit 1
}

# Instalar dependencias si no existen
if (-not (Test-Path "$projectRoot\node_modules")) {
    Write-Host "Instalando dependencias (npm install --legacy-peer-deps)..." -ForegroundColor Cyan
    npm install --legacy-peer-deps
    if ($LASTEXITCODE -ne 0) { exit 1 }
    Write-Host "Dependencias instaladas." -ForegroundColor Green
} else {
    Write-Host "Dependencias ya instaladas." -ForegroundColor Green
}

# Arrancar servidor de desarrollo
Write-Host "Iniciando servidor en http://localhost:3000 ..." -ForegroundColor Cyan
npm run dev
