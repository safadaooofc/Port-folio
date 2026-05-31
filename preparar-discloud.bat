@echo off
title Preparar deploy Discloud - Kiover Portfolio
cd /d "%~dp0"

echo.
echo  ========================================
echo   Preparar zip para Discloud
echo   Portfólio Kiover
echo  ========================================
echo.

if not exist package.json (
  echo ERRO: execute este script na raiz do projeto.
  pause
  exit /b 1
)

if exist portfolio-discloud.zip del portfolio-discloud.zip

echo  Empacotando arquivos...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference = 'Stop'; " ^
  "$root = Get-Location; " ^
  "$temp = Join-Path $env:TEMP ('discloud-pack-' + [guid]::NewGuid().ToString()); " ^
  "New-Item -ItemType Directory -Path $temp | Out-Null; " ^
  "$items = @('src','public','server.js','discloud.config','package.json','package-lock.json','vite.config.ts','tsconfig.json','index.html'); " ^
  "foreach ($item in $items) { " ^
  "  $path = Join-Path $root $item; " ^
  "  if (Test-Path $path) { Copy-Item -Path $path -Destination $temp -Recurse -Force } " ^
  "  else { Write-Warning \"Aviso: $item nao encontrado\" } " ^
  "}; " ^
  "$zip = Join-Path $root 'portfolio-discloud.zip'; " ^
  "Compress-Archive -Path (Join-Path $temp '*') -DestinationPath $zip -Force; " ^
  "Remove-Item -Path $temp -Recurse -Force; " ^
  "$size = [math]::Round((Get-Item $zip).Length / 1KB, 1); " ^
  "Write-Host \"OK: portfolio-discloud.zip ($size KB)\""

if errorlevel 1 (
  echo.
  echo  ERRO ao criar o zip.
  pause
  exit /b 1
)

echo.
echo  Proximo passo:
echo  1. Abra https://discloud.com/dashboard
echo  2. Faca upload de portfolio-discloud.zip
echo  3. Confirme subdominio: kiover.discloud.app
echo.
echo  Documentacao: docs/deploy/discloud.md
echo.
pause
