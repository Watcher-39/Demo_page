import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_PATH = os.path.join(BASE_DIR, "instance", "mydatabase.db")

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_PATH}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

db = SQLAlchemy(app)

import main