@echo off
echo Cleaning up git lock files...
del /F /Q ".git\index.lock" 2>nul

echo.
echo Adding files to git...
git add .

echo.
echo Creating commit...
git commit -m "Initial commit: Portfolio with animated backgrounds"

echo.
echo Adding remote repository...
git remote add origin https://github.com/muhammed-ziyan-ummalil/portfolio.git 2>nul

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo Done! Check https://github.com/muhammed-ziyan-ummalil/portfolio
pause
