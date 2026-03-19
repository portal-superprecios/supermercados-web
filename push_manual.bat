@echo off
setlocal

:: Obtener la fecha y hora actual para el mensaje del commit
set current_date=%date%
set current_time=%time%

echo [1/4] Actualizando datos de los supermercados...
python process_data.py

echo [2/4] Agregando archivos a Git...
git add .

echo [3/4] Creando commit...
git commit -m "Actualizacion manual de datos: %current_date% %current_time%"

echo [4/4] Subiendo a GitHub...
git push

echo.
echo === PROCESO COMPLETADO ===
pause
