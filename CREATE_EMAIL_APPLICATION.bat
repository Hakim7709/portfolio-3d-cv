@echo off
echo ========================================================
echo   Generating Ready-to-Send Job Application Email Draft...
echo ========================================================
cd /d "%~dp0\job_search_kit"
python send_application_email.py
echo.
echo [DONE] Draft created: job_search_kit\sample_application_draft.eml
echo Double-click that file to open in your Email app!
echo ========================================================
pause
