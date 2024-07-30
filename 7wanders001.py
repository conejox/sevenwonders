import json
import os
            
HERE = os.path.dirname(__file__)
filepath = os.path.join(HERE, "Cards.json")
cards = []

with open(filepath, "r") as json_file:
    cards_data = json.loads(json_file.read())

    
# Acceder a los nombres de todas las cartas
names =     [carta['nombre']            for carta in cards_data['cards']]
types=      [carta["tipo"]              for carta in cards_data["cards"]]
costs =     [carta["coste"]             for carta in cards_data["cards"]]
#benefits=   [carta["beneficio"]         for carta in cards_data["cards"]]
#players=    [carta["numero_jugadores"]  for carta in cards_data["cards"]]
#foages=       [carta["era"]               for carta in cards_data["cards"]]


limite_madera = (input("Número de madera: "))
limite_piedra = 1(input("Número de piedra: "))

cartas_cumplen_limites = []
for carta in cards_data['cards']:
    coste = carta['coste']['opcion1']  # Siempre eligiendo la 'opcion1' como costo
    print(f"Coste de {carta['nombre']}: {coste}")  # Añadimos una impresión para depuración

    cumple_limites = True
    for recurso, cantidad in coste.items():
        if recurso == 'madera' and cantidad > limite_madera:
            cumple_limites = False
            break
        if recurso == 'piedra' and cantidad > limite_piedra:
            cumple_limites = False
            break

    if cumple_limites:
        cartas_cumplen_limites.append(carta)

print("Cartas que cumplen con los límites:")
for carta in cartas_cumplen_limites:
    print(carta['nombre'])