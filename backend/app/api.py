from fastapi import APIRouter\n\nrouter = APIRouter()\n\n@router.get('/ping')\ndef ping():\n    return {'message': 'pong'}
