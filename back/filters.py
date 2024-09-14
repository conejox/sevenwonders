def filter_by_num_players(item, num_players):
    return item.get('numero_jugadores', 10) <= num_players

def filter_by_age1(item, age1):
  return item.get('era', {}).get('1', 0) <= age1 

def filter_by_age2(item, age2):
    return item.get('era', {}).get('2', 0) <= age2

def filter_by_age3(item, age3):
    return item.get('era', {}).get('3', 0) <= age3
 



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
    return item.get('coste', {}).get('tela', 0) <= wool

def filter_by_glass(item, glass):
    return item.get('coste', {}).get('vidrio', 0) <= glass

def filter_by_paper(item, paper):
    return item.get('coste', {}).get('papel', 0) <= paper

def filter_zero_cost(item, zero):
    if zero == 1:
        return True  # Do nothing, include the item
    else:
        # Check if any value in 'coste' is greater than 0
        return any(value > 0 for value in item.get('coste', {}).values())
        
    

def filter_cards(data, request_json):
    num_players = int(request_json['numPlayers'])
    age1 = int(request_json['age1'])
    age2 = int(request_json['age2'])
    age3 = int(request_json['age3'])
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
    zero = int(request_json['zero'])

    filtered_cards = [
        {
        'name': item.get('nombre', 'default_nombre'),
        'type': next((k for k, v in item.get('tipo', {}).items() if v > 0), 'default_tipo'),  # Get the key with value > 0
        'numPlayers': item.get('numero_jugadores', 10),
        'benefit': item.get('beneficio', {}),
        'cost': [(k, v) for k, v in item.get('coste', {}).items() if v > 0],  
        'age': next(k for k, v in item.get('era', {}).items() if v > 0),
        'quantity': item.get('cantidad', 1)
        }
        for item in data 
        if filter_by_num_players(item, num_players) and
           filter_by_age1(item, age1) and
           filter_by_age2(item, age2) and
           filter_by_age3(item, age3) and
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
           filter_by_paper(item, paper) and
           filter_zero_cost(item,zero)
    ]
    return filtered_cards