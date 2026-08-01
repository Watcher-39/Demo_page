from config import db

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    password = db.Column(db.String(16), unique=False, nullable=False)

    def to_json(self):
        return{
            "id": self.id,
            "name": self.name,
            "password": self.password,
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=True)
    def to_json(self):
        return{
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
        }