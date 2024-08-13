def filter_by_num_players(item, num_players):
    return item.get('numero_jugadores', 10) <= num_players

def filter_by_age(item, age):
    return age == 4 or item.get('era') == age

def filter_by_type(item, type):
    return type == 'all' or item.get('tipo') == type

def filter_by_wood(item, wood):
    return  item.get('coste', 0).get('madera', 0) <= wood

def filter_by_stone(item, stone):
    return  item.get('coste', 0).get('piedra', 0) <= stone

def filter_by_clay(item, clay):
    return  item.get('coste', 0).get('arcilla', 0) <= clay

def filter_by_ore(item, ore):
    return  item.get('coste', 0).get('mineral', 0) <= ore

def filter_by_gold(item, gold):
    return item.get('coste', 0).get('oro', 0) <= gold

def filter_by_wool(item, wool):
    return item.get('coste', 0).get('lana', 0) <= wool

def filter_by_glass(item, glass ):
    return item.get('coste', 0).get('vidrio', 0) <= glass

def filter_by_paper(item, paper):
    return item.get('coste', 0).get('papel', 0) <= paper


def filter_cards(data, request_json):
    num_players = int(request_json['numPlayers'])
    age = int(request_json['age'])
    type = str(request_json['type'])
    wood = int(request_json['wood'])
    stone = int(request_json['stone'])
    clay = int(request_json['clay'])
    ore = int(request_json['ore'])
    gold = int(request_json['Gold'])
    wool = int(request_json['wool'])
    glass = int(request_json['glass'])
    paper = int(request_json['paper'])

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
    return filtered_cards