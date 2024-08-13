# test_main.py
import unittest
from main import filter_by_stone

class FilterByStoneTestCase(unittest.TestCase):
    def test_stone_is_zero(self):
        item = {'coste': {'piedra': 3}}
        self.assertTrue(filter_by_stone(item, 0))

    def test_stone_greater_than_cost(self):
        item = {'coste': {'piedra': 2}}
        self.assertTrue(filter_by_stone(item, 3))

    def test_stone_equal_to_cost(self):
        item = {'coste': {'piedra': 2}}
        self.assertTrue(filter_by_stone(item, 2))

    def test_stone_less_than_cost(self):
        item = {'coste': {'piedra': 3}}
        self.assertFalse(filter_by_stone(item, 2))

    def test_no_stone_cost_in_item(self):
        item = {'coste': {}}
        self.assertTrue(filter_by_stone(item, 2))

if __name__ == '__main__':
    unittest.main()