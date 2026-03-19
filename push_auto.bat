@echo off
setlocal

:loop
echo [%date% %time%] Iniciando actualizacion automatica...

echo [1/4] Actualizando datos de los supermercados...
python process_data.py

echo [2/4] Agregando archivos a Git...
git add .

echo [3/4] Creando commit...
git commit -m "Actualizacion automatica: %date% %time%"

echo [4/4] Subiendo a GitHub...
git push

echo.
echo [%date% %time%] === ACTUALIZACION COMPLETADA ===
echo Esperando 12 horas para la proxima actualizacion (puedes cerrar esta ventana)...
echo.

:: Esperamos 43200 segundos (12 horas)
timeout /t 43200 /nobreak

goto loop
