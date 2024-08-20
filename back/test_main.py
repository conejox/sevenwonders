import unittest
from unittest.mock import patch
from flask import Flask, jsonify
from main import app, load_json

class CardEndpointTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    @patch('main.load_json')
    def test_card_endpoint(self, mock_load_json):
        # Mock data to be returned by load_json
        mock_data = [
            {
                'nombre': 'Card1',
                'tipo': 'Type1',
                'numero_jugadores': 4,
                'beneficio': {'points': 10},
                'coste': 5,
                'era': 2,
                'cantidad': 3
            },
            {
                'nombre': 'Card2',
                'tipo': 'Type2',
                'numero_jugadores': 2,
                'beneficio': {'points': 5},
                'coste': 3,
                'era': 1,
                'cantidad': 1
            }
        ]
        mock_load_json.return_value = mock_data

        # Make a GET request to the /data endpoint
        response = self.app.get('/data')

        # Assert the response status code
        self.assertEqual(response.status_code, 200)

        # Expected response data
        expected_data = [
            {
                'name': 'Card1',
                'type': 'Type1',
                'numPlayers': 4,
                'benefit': {'points': 10},
                'cost': 5,
                'age': 2,
                'quantity': 3
            },
            {
                'name': 'Card2',
                'type': 'Type2',
                'numPlayers': 2,
                'benefit': {'points': 5},
                'cost': 3,
                'age': 1,
                'quantity': 1
            }
        ]

        # Assert the response JSON data
        self.assertEqual(response.get_json(), expected_data)

if __name__ == '__main__':
    unittest.main()