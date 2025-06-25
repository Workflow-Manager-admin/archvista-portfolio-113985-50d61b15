#!/bin/bash
cd /home/kavia/workspace/code-generation/archvista-portfolio-113985-50d61b15/portfolio_frontend_workspace/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

