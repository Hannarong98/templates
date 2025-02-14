from fastapi_azure_auth.user import User
from pydantic import BaseModel, Field


class HelloWorldResponse(BaseModel):
    hello: str = Field(..., description="What we're saying hello to")
    user: User = Field(..., description='The user object')
