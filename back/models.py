from config import db

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