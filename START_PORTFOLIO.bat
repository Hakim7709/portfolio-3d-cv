@echo off
echo ========================================================
echo   Launching Md Hakim Mia's 3D Interactive Portfolio...
echo ========================================================
cd /d "%~dp0\portfolio"
start http://localhost:3000
npm run dev
pause

