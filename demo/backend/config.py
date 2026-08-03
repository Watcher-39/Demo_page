from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from waitress import serve
import os

app = Flask(__name__)
CORS(app)
serve(app, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL", "sqlite:///demo.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)