from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Card(db.Model):
    nombre = db.Column(db.String(80), primary_key=True, nullable=False)
    era = db.Column(db.Integer, primary_key=True, nullable=False)
    tipo = db.Column(db.String(80), nullable=False)
    numero_jugadores = db.Column(db.Integer, nullable=False)
    coste = db.Column(db.JSON, nullable=False)
    beneficio = db.Column(db.JSON, nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)

    def to_json(self):
        return {
            'nombre': self.nombre,
            'era': self.era,
            'tipo': self.tipo,
            'numero_jugadores': self.numero_jugadores,
            'coste': self.coste,
            'beneficio': self.beneficio,
            'cantidad': self.cantidad,
        }

def load_cards(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        cards = json.load(file)
    return cards

def populate_db_from_json(file_path):
    cards = load_cards(file_path)
    for card in cards:
        new_card = Card(
            nombre=card['nombre'],
            era=int(card['era']),
            tipo=card['tipo'],
            numero_jugadores=int(card['numero_jugadores']),
            coste=card.get('coste', {}),
            beneficio=card.get('beneficio', {}),
            cantidad=card.get('cantidad', 1)  # Default to 1 if not provided
        )
        db.session.add(new_card)
    db.session.commit()

# Example usage
if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create tables
        populate_db_from_json('cards.json')

