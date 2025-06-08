from fastapi import FastAPI\nfrom app.api import router as api_router\n\napp = FastAPI(title='MicroInvoice API')\n\napp.include_router(api_router)
