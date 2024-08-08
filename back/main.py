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
        'cost': item.get('coste', 0),
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
    wood = int(request.json['wood'])
    stone = int(request.json['stone'])
    clay = int(request.json['clay'])
    ore = int(request.json['ore'])
    gold = int(request.json['Gold'])
    wool = int(request.json['wool'])
    glass = int(request.json['glass'])
    paper = int(request.json['paper'])
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, 'cards.json')  # Use absolute path
    data = load_json(file_path)

    def filter_by_num_players(item, num_players):
        return item.get('numero_jugadores', 10) <= num_players

    def filter_by_age(item, age):
        return age == 4 or item.get('era') == age

    def filter_by_type(item, type):
        return type == 'all' or item.get('tipo') == type

    def filter_by_wood(item, wood):
        return wood == 0 or item.get('coste', 0).get('madera', 0) <= wood
    
    def filter_by_stone(item, stone):
        return stone == 0 or item.get('coste', 0).get('piedra', 0) <= stone
    
    def filter_by_clay(item, clay):
        return clay == 0 or item.get('coste', 0).get('arcilla', 0) <= clay
    

    def filter_by_ore(item, ore):
        return ore == 0 or item.get('coste', 0).get('mineral', 0) <= ore

    def filter_by_gold(item, gold):
        return gold == 0 or item.get('coste', 0).get('oro', 0) <= gold
    
    def filter_by_wool(item, wool):
        return wool == 0 or item.get('coste', 0).get('lana', 0) <= wool
    
    def filter_by_glass(item, glass ):
        return glass == 0 or item.get('coste', 0).get('vidrio', 0) <= glass
    
    def filter_by_paper(item, paper):
        return paper == 0 or item.get('coste', 0).get('papel', 0) <= paper
    
        
    
    filtered_cards = [
        {
            'name': item.get('nombre', 'default_nombre'),
            'type': item.get('tipo',0),
            'numPlayers': item.get('numero_jugadores', 10),
            'benefit': item.get('beneficio', {}),
            'cost': item.get('coste',0),  
            'age': item.get('era',4),
            'quantity': item.get('cantidad', 1)
        }
        for item in data 
        if filter_by_num_players(item, num_players) and
           filter_by_age(item, age) and
           filter_by_type(item, type) and
           filter_by_wood(item, wood) and
           filter_by_stone(item, stone) and
           filter_by_clay(item, clay) and
           filter_by_ore(item, ore) and
           filter_by_gold(item, gold) and
           filter_by_wool(item, wool) and
           filter_by_glass(item, glass) and
           filter_by_paper(item, paper)
    ]
    print(filtered_cards)
    print(len(filtered_cards))
    return jsonify(filtered_cards)

    

if __name__ == "__main__":
    app.run(debug=True)