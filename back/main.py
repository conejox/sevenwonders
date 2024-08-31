import json
import os

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

import filters as f

app = Flask(__name__)
cors = CORS(app,origins='*')

def load_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

#all cards
@app.route('/data', methods=['GET'])
def card():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, 'cards.json')  # Use absolute path
    data = load_json(file_path)
    
    card = [{
        'name': item.get('nombre', 'default_nombre'),
        'type': next((k for k, v in item.get('tipo', {}).items() if v > 0), 'default_tipo'),  # Get the key with value > 0
        'numPlayers': item.get('numero_jugadores', 10),
        'benefit': item.get('beneficio', {}),
        'cost': [(k, v) for k, v in item.get('coste', {}).items() if v > 0],
        'age': item.get('era'),
        'quantity': item.get('cantidad', 1)
    } for item in data]
    
    return jsonify(card)

# seach engine
@app.route('/data/search', methods=['POST'])
@cross_origin()
def search():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, 'cards.json')  # Use absolute path
    data = load_json(file_path)        
    
    filtered_cards = f.filter_cards(data, request.json)

    print(filtered_cards)
    print(len(filtered_cards))
    return jsonify(filtered_cards)

    

if __name__ == "__main__":
    app.run(debug=True)