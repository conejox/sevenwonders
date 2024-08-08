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

# seach engine
@app.route('/data/search', methods=['POST'])
@cross_origin()
def search():
    num_players = int(request.json['numPlayers'])
    age = int(request.json['age'])
    type = str(request.json['type'])
    gold = bool(request.json['Gold'])
    wool = bool(request.json['wool'])
    glass = bool(request.json['glass'])
    paper = bool(request.json['paper'])
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, 'cards.json')  # Use absolute path
    data = load_json(file_path)

    def filter_by_num_players(item, num_players):
        return item.get('numero_jugadores', 10) <= num_players

    def filter_by_age(item, age):
        return age == 4 or item.get('era') == age

    def filter_by_type(item, type):
        return type == 'all' or item.get('tipo') == type

    def filter_by_cost(item, gold, wool, glass, paper):
        if not isinstance(item.get('coste'), dict):
            return False
        cost = item['coste']
        return (not gold or 'oro' in cost) and \
            (not wool or 'tela' in cost) and \
            (not glass or 'vidrio' in cost) and \
            (not paper or 'papel' in cost)

    
    filtered_cards = [
        {
            'name': item.get('nombre', 'default_nombre'),
            'type': item.get('tipo', 'default_tipo'),
            'numPlayers': item.get('numero_jugadores', 10),
            'benefit': item.get('beneficio', {}),
            'cost': item['coste'] if isinstance(item.get('coste'), dict) else {},
            'age': item.get('era',4),
            'quantity': item.get('cantidad', 1)
        }
        for item in data 
        if filter_by_num_players(item, num_players) and
           filter_by_age(item, age) and
           filter_by_type(item, type) and
           filter_by_cost(item, gold, wool, glass, paper)
    ]
    print(filtered_cards)
    return jsonify(filtered_cards)

    

if __name__ == "__main__":
    app.run(debug=True)