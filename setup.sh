#!/bin/bash

# This script is used to setup the environment for the project.

# Exit immediately if a command exits with a non-zero status.

set -e

CLIENT_DIR="./client"
SERVER_DIR="./server"

# Start client (React)
start_client() {
    echo "Iniciando el cliente React..."
    cd $CLIENT_DIR
    if [ ! -d "node_modules" ]; then
        echo "Instalando dependencias del cliente..."
        pnpm install
    fi
    pnpm dev &
    CLIENT_PID=$!
    cd -
}

# Start server (FastAPI)
start_server() {
    echo "Init FastAPI..."
    cd $SERVER_DIR
    if [ ! -d ".venv" ]; then
        echo "Creating virtual environment and installing dependencies..."
        python3 -m venv .venv
        source .venv/bin/activate
        pip install -r requirements.txt
    else
        source .venv/bin/activate
    fi
    fastapi dev main.py &
    SERVER_PID=$!
    cd -
}

# Stop services
cleanup() {
    echo "Stopping services..."
    kill $CLIENT_PID $SERVER_PID
    exit 0
    clean
}

trap cleanup SIGINT SIGTERM

case "$1" in
    client)
        start_client
        ;;
    server)
        start_server
        ;;
    *)
        # Si no se pasa ningún argumento o es diferente, iniciar ambos servicios
        start_client
        start_server
        ;;
esac

wait