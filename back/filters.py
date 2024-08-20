def filter_by_num_players(item, num_players):
    return item.get('numero_jugadores', 10) <= num_players

def filter_by_age(item, age):
    return age == 4 or item.get('era') == age
#tipo
def filter_by_baseMaterial(item, baseMaterial):
    return item.get('tipo', {}).get('materia prima', 0) <= baseMaterial

def filter_by_manufacturedProducts(item, manufacturedProducts):
    return item.get('tipo', {}).get('bienes manufacturados', 0) <= manufacturedProducts

def filter_by_military(item, military):
    return item.get('tipo', {}).get('estructura militar', 0) <= military

def filter_by_comercial(item, comercial):
    return item.get('tipo', {}).get('estructura comercial', 0) <= comercial

def filter_by_civil(item, civil):
    return item.get('tipo', {}).get('estructura civil', 0) <= civil

def filter_by_science(item, science):
    return item.get('tipo', {}).get('ciencia', 0) <= science

def filter_by_guild(item, guild):
    return item.get('tipo', {}).get('guild', 0) <= guild


    #coste

def filter_by_wood(item, wood):
    return item.get('coste', {}).get('madera', 0) <= wood

def filter_by_stone(item, stone):
    return item.get('coste', {}).get('piedra', 0) <= stone

def filter_by_clay(item, clay):
    return item.get('coste', {}).get('arcilla', 0) <= clay

def filter_by_ore(item, ore):
    return item.get('coste', {}).get('mineral', 0) <= ore

def filter_by_gold(item, gold):
    return item.get('coste', {}).get('oro', 0) <= gold

def filter_by_wool(item, wool):
    return item.get('coste', {}).get('lana', 0) <= wool

def filter_by_glass(item, glass):
    return item.get('coste', {}).get('vidrio', 0) <= glass

def filter_by_paper(item, paper):
    return item.get('coste', {}).get('papel', 0) <= paper

def filter_cards(data, request_json):
    num_players = int(request_json['numPlayers'])
    age = int(request_json['age'])
    baseMaterial = int(request_json['baseMaterial'])
    manufacturedProducts = int(request_json['manufacturedProducts'])
    military = int(request_json['military'])
    comercial = int(request_json['comercial'])
    civil = int(request_json['civil'])
    science = int(request_json['science'])
    guild = int(request_json['guild'])
    
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
            'type': item.get('tipo'),
            'numPlayers': item.get('numero_jugadores', 10),
            'benefit': item.get('beneficio', {}),
            'cost': item.get('coste', 0),  
            'age': item.get('era', 4),
            'quantity': item.get('cantidad', 1)
        }
        for item in data 
        if filter_by_num_players(item, num_players) and
           filter_by_age(item, age) and
           filter_by_baseMaterial(item, baseMaterial) and
           filter_by_manufacturedProducts(item, manufacturedProducts) and
           filter_by_military(item, military) and
           filter_by_comercial(item, comercial) and
           filter_by_civil(item, civil) and
           filter_by_science(item, science) and
           filter_by_guild(item, guild) and
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