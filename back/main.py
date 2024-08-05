from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import json
import os

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
        'type': item.get('tipo', 'default_tipo'),
        'numPlayers': item.get('numero_jugadores', 10),
        'benefit': item.get('beneficio', {}),
        'cost': item.get('coste', {}),
        'age': item.get('era', 1),
        'quantity': item.get('cantidad', 1)
    } for item in data]
    
    return jsonify(card)

# number of players, age and type
@app.route('/data/numPlayers', methods=['POST'])
@cross_origin()
def numPlayers():
    num_players = int(request.json['numPlayers'])
    age = int(request.json['age'])
    type = str(request.json['type'])
    has_gold = bool(request.json['hasGold'])
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, 'cards.json')  # Use absolute path
    data = load_json(file_path)
    
    filtered_cards = [
        {
            'name': item.get('nombre', 'default_nombre'),
            'type': item.get('tipo', 'default_tipo'),
            'numPlayers': item.get('numero_jugadores', 10),
            'benefit': item.get('beneficio', {}),
            'cost': item['coste'].get('opcion1', {}) if isinstance(item.get('coste', {}), dict) else {},
            'age': item.get('era',4),
            'quantity': item.get('cantidad', 1)
        }
        for item in data 
        if item.get('numero_jugadores', 10)<= num_players 
        and (age == 4 or item.get('era') == age)
        and (type == 'all' or item.get('tipo') == type)
        and (not has_gold or ('oro' in item.get('coste', {}) if isinstance(item.get('coste', {}), dict) else False))
        ]
    
    print(filtered_cards)
    return jsonify(filtered_cards)

    

if __name__ == "__main__":
    app.run(debug=True)