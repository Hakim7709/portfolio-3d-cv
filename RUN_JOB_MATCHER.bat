@echo off
echo ========================================================
echo   Running Ireland Job Matcher & Sponsorship Scanner...
echo ========================================================
cd /d "%~dp0\job_search_kit"
python irish_job_matcher.py
echo.
pause

