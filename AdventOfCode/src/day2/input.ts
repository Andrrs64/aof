export const input = `
Game 1: 2 green, 12 blue; 6 red, 6 blue; 8 blue, 5 green, 5 red; 5 green, 13 blue; 3 green, 7 red, 10 blue; 13 blue, 8 red
Game 2: 1 green, 7 red; 1 green, 9 red, 3 blue; 4 blue, 5 red
Game 3: 2 red, 2 blue, 6 green; 1 blue, 2 red, 2 green; 3 blue, 3 green
Game 4: 8 green, 16 red, 7 blue; 1 red, 7 blue, 12 green; 8 green, 14 red, 1 blue; 6 blue, 9 green, 12 red; 9 red, 2 green; 8 red, 7 blue, 17 green
Game 5: 2 red, 7 green; 2 red, 1 green, 4 blue; 4 blue, 7 green, 5 red; 8 red, 2 blue, 5 green
Game 6: 20 red, 4 green, 3 blue; 12 green, 1 blue, 9 red; 8 green, 15 red, 1 blue; 17 red, 5 blue, 7 green
Game 7: 2 red, 2 blue, 5 green; 3 blue, 1 green, 2 red; 2 green, 2 blue; 2 green, 1 red, 1 blue; 1 blue, 6 green; 1 green, 2 red
Game 8: 18 red, 1 green, 3 blue; 7 blue, 3 green, 18 red; 2 green
Game 9: 13 blue; 13 blue; 3 red, 13 blue; 1 red, 8 blue; 1 green, 8 blue, 1 red
Game 10: 15 blue, 1 green, 12 red; 13 red, 13 green, 5 blue; 2 blue, 3 red, 7 green
Game 11: 2 blue, 17 red, 5 green; 6 red, 2 green, 12 blue; 7 green, 5 blue, 14 red
Game 12: 12 blue, 10 green, 14 red; 7 red, 3 green; 10 blue, 2 red; 4 red, 5 blue, 7 green
Game 13: 1 red, 13 blue, 14 green; 1 green, 1 red, 7 blue; 5 red, 15 blue, 14 green
Game 14: 2 blue, 1 red, 9 green; 4 blue, 3 red; 2 red, 7 green; 2 red, 4 green
Game 15: 5 green, 7 blue, 18 red; 10 blue, 4 green, 4 red; 13 blue, 16 red; 18 red, 4 green; 1 blue, 6 green, 17 red; 9 blue, 2 green, 15 red
Game 16: 15 green, 3 red, 4 blue; 3 blue, 16 green; 5 green, 2 blue, 1 red; 6 blue, 3 red, 12 green; 2 red, 3 green
Game 17: 10 green, 4 blue, 11 red; 6 green, 13 red, 6 blue; 2 blue, 5 green, 2 red
Game 18: 1 red, 13 blue; 4 green, 5 red; 3 green, 1 red, 12 blue; 1 green, 15 blue; 7 red, 1 green, 15 blue
Game 19: 2 blue, 6 green, 4 red; 4 green, 15 red; 3 blue, 8 red, 7 green
Game 20: 7 blue, 7 red, 10 green; 5 red, 1 green, 9 blue; 1 blue, 6 red, 12 green; 1 red, 11 green; 6 green, 9 blue, 4 red
Game 21: 4 red, 16 green, 10 blue; 2 blue, 14 green; 6 green, 4 blue; 7 blue, 6 red; 6 red, 10 green, 6 blue
Game 22: 5 green, 2 red; 5 green, 3 red, 1 blue; 2 red, 1 green, 7 blue; 3 red, 11 green, 4 blue; 6 blue, 10 green, 2 red; 5 blue, 2 green, 2 red
Game 23: 3 blue, 3 red; 6 blue, 6 green, 2 red; 3 green, 15 blue, 2 red; 2 green, 1 blue, 2 red; 5 green, 5 blue; 5 green, 10 blue, 7 red
Game 24: 1 blue, 19 green; 18 green, 1 red, 2 blue; 5 green; 2 blue, 3 green, 1 red; 1 red, 5 green; 9 green, 1 red
Game 25: 1 green, 1 red, 7 blue; 2 green, 10 blue, 1 red; 8 red, 1 blue, 1 green
Game 26: 7 blue, 2 green, 2 red; 8 blue, 6 green, 9 red; 5 red, 11 green, 2 blue; 7 blue, 5 red, 9 green; 10 blue, 12 green, 4 red
Game 27: 9 blue, 1 red; 15 blue, 2 red; 2 red, 11 blue; 15 blue, 4 red, 1 green; 4 red, 1 green
Game 28: 9 green, 7 blue; 8 green, 3 red, 2 blue; 3 red, 11 blue, 7 green; 3 red, 3 blue; 9 green, 2 red
Game 29: 2 green, 3 blue, 1 red; 13 blue, 2 green, 8 red; 3 green, 12 red, 9 blue
Game 30: 9 red, 18 green, 6 blue; 1 green, 3 blue, 5 red; 6 blue, 12 green, 3 red
Game 31: 6 green, 1 red; 1 blue, 4 red, 10 green; 11 green, 1 blue, 4 red; 2 green; 1 red, 1 green; 8 green
Game 32: 7 green, 8 blue, 1 red; 4 red, 5 blue, 8 green; 5 green, 2 blue; 2 red, 3 green, 2 blue
Game 33: 1 red, 1 blue; 16 red, 1 green, 2 blue; 1 blue, 13 red; 1 blue, 1 green, 17 red; 6 red, 1 blue, 1 green; 10 red, 2 blue
Game 34: 10 red, 13 green; 18 blue, 6 green; 5 blue, 1 red, 11 green; 8 green, 1 red, 9 blue; 11 blue, 10 red, 12 green
Game 35: 4 red, 2 green; 4 red, 3 blue, 7 green; 3 blue, 2 green, 7 red
Game 36: 1 blue, 8 red, 9 green; 2 green, 9 red, 2 blue; 8 blue, 10 green, 12 red; 9 blue, 9 green, 10 red; 1 red, 9 green, 5 blue
Game 37: 7 blue, 2 green, 14 red; 8 green, 8 red, 6 blue; 2 green, 12 red, 1 blue; 5 blue, 6 green, 5 red; 9 blue, 2 green, 1 red
Game 38: 11 red, 2 green; 15 red, 1 blue, 7 green; 3 red, 3 green, 1 blue; 2 blue, 11 red, 9 green; 2 blue, 3 green; 5 green, 8 red, 1 blue
Game 39: 4 blue, 13 red; 16 red, 3 blue, 2 green; 1 red, 1 blue
Game 40: 7 blue, 2 green; 2 green, 2 blue; 1 red, 1 blue; 1 red, 4 green, 15 blue
Game 41: 3 red, 5 blue, 5 green; 1 green, 4 blue, 1 red; 9 blue, 3 green, 1 red; 3 green, 9 blue, 1 red
Game 42: 8 green, 2 blue, 4 red; 10 green, 2 red, 1 blue; 4 red, 10 green; 5 green, 3 blue, 3 red; 5 green, 3 blue, 5 red; 3 red, 10 green, 5 blue
Game 43: 14 red, 8 green, 3 blue; 9 red, 2 blue, 9 green; 6 red, 4 green, 4 blue; 8 green; 12 blue, 10 red, 9 green
Game 44: 6 green, 1 red; 3 red, 11 green, 2 blue; 2 green, 2 red, 3 blue; 1 red, 15 green, 2 blue
Game 45: 12 green, 16 red, 6 blue; 15 blue, 3 red, 5 green; 2 blue, 10 green; 15 red, 15 blue; 6 green, 5 blue, 16 red; 16 green, 6 blue
Game 46: 1 green, 3 red, 18 blue; 3 red, 8 green, 10 blue; 3 green, 12 blue; 2 red, 10 green, 17 blue; 12 green, 9 blue; 3 green, 6 blue
Game 47: 10 green, 7 red, 6 blue; 12 green, 2 blue, 5 red; 7 green, 10 blue, 3 red; 11 green, 7 red; 5 blue, 8 green
Game 48: 1 green, 2 red; 2 blue, 1 green, 6 red; 5 red, 1 blue; 2 blue, 1 green, 1 red; 9 red
Game 49: 6 green, 4 blue, 1 red; 6 blue, 2 red, 1 green; 2 red, 5 blue, 4 green; 3 green, 6 blue, 1 red; 6 green, 12 blue, 1 red
Game 50: 2 blue, 4 red, 2 green; 6 red, 12 green, 4 blue; 1 blue, 6 red, 13 green
Game 51: 3 red, 1 blue; 2 red, 1 green, 2 blue; 3 blue, 2 red, 1 green; 1 red, 1 green, 1 blue
Game 52: 1 green, 12 blue; 2 red, 9 blue; 1 green, 8 blue, 2 red; 8 blue, 1 red; 1 red, 13 blue; 2 red, 2 blue, 1 green
Game 53: 7 blue, 16 green, 13 red; 9 red, 5 blue, 15 green; 4 green, 1 red; 15 green, 10 red, 2 blue; 11 green, 11 red, 2 blue
Game 54: 5 red, 20 green, 11 blue; 13 red, 4 blue; 13 green, 15 blue; 1 red, 8 blue, 11 green; 5 green, 17 blue, 4 red
Game 55: 5 red, 17 blue, 13 green; 17 red, 1 blue, 6 green; 3 red, 5 green; 8 green, 16 blue, 5 red
Game 56: 6 green, 5 blue; 7 green, 1 red, 1 blue; 7 green, 2 blue; 3 blue, 8 green; 5 blue
Game 57: 1 blue, 2 red, 3 green; 2 blue; 4 green, 2 red, 1 blue; 2 red, 1 green, 1 blue; 2 red, 2 blue, 1 green; 1 blue, 2 green
Game 58: 6 red, 7 green, 18 blue; 9 blue, 4 green, 8 red; 12 green, 5 blue, 7 red
Game 59: 2 red, 19 green, 1 blue; 10 green, 5 red; 2 blue, 10 green; 1 red, 3 blue; 14 green, 4 red
Game 60: 12 blue, 2 red, 11 green; 6 red, 1 blue, 11 green; 6 red, 11 blue, 7 green; 5 green, 4 red, 7 blue; 2 red, 14 green
Game 61: 7 red, 4 blue, 1 green; 11 blue, 8 red, 3 green; 10 blue, 7 red, 2 green; 2 green, 12 blue, 10 red
Game 62: 3 blue, 19 green, 1 red; 3 red, 7 blue, 14 green; 10 green, 1 blue
Game 63: 11 green, 1 blue, 15 red; 11 green, 16 red; 11 green, 8 blue, 12 red
Game 64: 8 red, 2 green, 3 blue; 1 green, 9 red, 7 blue; 11 red, 3 blue; 2 blue, 3 green, 9 red; 3 blue, 6 red
Game 65: 1 red, 4 blue; 4 blue, 6 red; 4 blue, 11 red; 2 green, 2 blue, 4 red; 1 blue, 9 red; 5 green, 7 red
Game 66: 8 blue, 11 green; 7 red, 6 green; 6 red, 7 blue, 9 green; 12 blue, 2 red, 6 green
Game 67: 4 green, 6 blue, 2 red; 4 blue, 2 red, 2 green; 4 green, 2 blue; 2 green, 4 blue, 2 red; 4 red, 4 green, 2 blue; 2 red, 7 green
Game 68: 1 red, 5 blue; 5 blue, 16 green, 2 red; 1 red, 12 green, 4 blue; 7 blue, 9 red, 6 green
Game 69: 6 blue, 6 green; 3 blue, 9 red; 3 green, 13 red, 6 blue
Game 70: 1 green, 5 red; 1 blue, 1 green, 15 red; 5 blue, 5 red; 10 red, 7 blue; 9 red, 7 blue; 4 red, 1 green, 3 blue
Game 71: 6 green, 11 blue, 6 red; 11 blue, 3 red, 4 green; 6 red, 10 blue
Game 72: 5 green, 3 blue, 6 red; 4 blue, 2 red; 3 red, 4 green, 1 blue; 18 blue, 4 green; 3 red, 1 blue, 1 green; 4 blue, 4 green, 1 red
Game 73: 8 green, 4 red, 13 blue; 2 green, 11 blue, 4 red; 2 blue, 12 red, 4 green; 2 blue, 1 red, 2 green; 11 blue, 8 red, 11 green
Game 74: 4 red, 8 blue, 3 green; 7 red, 7 blue, 7 green; 7 red, 2 blue, 1 green
Game 75: 1 blue, 1 green, 2 red; 6 red, 1 blue; 15 red, 13 blue; 19 red, 4 green, 4 blue; 12 blue, 3 red, 2 green; 12 red, 3 green, 1 blue
Game 76: 1 blue, 3 red, 12 green; 13 green, 1 red, 1 blue; 6 blue, 3 green, 2 red; 1 green, 1 blue
Game 77: 4 blue; 1 red, 1 green, 5 blue; 2 blue; 4 blue, 2 red, 3 green; 1 green, 5 blue; 1 red, 1 green, 6 blue
Game 78: 2 red, 4 green, 1 blue; 4 green, 1 blue, 6 red; 7 green, 1 blue
Game 79: 3 red, 14 blue, 1 green; 1 blue, 5 red; 4 green, 3 blue, 5 red; 7 red, 1 blue, 3 green; 7 blue, 4 green
Game 80: 12 red, 1 green, 11 blue; 2 green, 5 blue, 13 red; 15 red, 15 blue, 1 green; 1 red, 1 green, 14 blue
Game 81: 3 green, 2 red, 6 blue; 4 green, 11 blue; 4 green, 9 blue, 4 red; 10 blue, 2 red, 4 green
Game 82: 15 blue, 7 green; 4 green, 15 blue, 7 red; 4 green, 9 blue, 5 red; 4 green, 6 blue, 1 red
Game 83: 16 green, 10 red, 9 blue; 14 green, 3 blue, 7 red; 11 red, 7 blue; 10 blue, 15 red; 3 red, 4 blue, 10 green; 15 red, 3 blue
Game 84: 3 red, 14 blue; 1 red, 3 blue; 2 red, 4 green, 6 blue; 1 green, 11 blue, 2 red
Game 85: 15 green, 2 blue, 11 red; 4 red, 7 blue, 6 green; 3 blue, 14 green; 10 green, 10 blue, 7 red; 17 red, 3 green, 15 blue
Game 86: 8 red, 1 green, 14 blue; 6 red, 12 green, 9 blue; 13 blue, 9 green, 6 red
Game 87: 4 red, 3 blue; 4 blue, 4 green, 4 red; 1 green, 6 blue, 4 red; 2 green, 4 red, 3 blue; 4 blue, 4 green, 2 red; 1 green, 7 blue
Game 88: 6 blue, 4 red, 6 green; 1 red, 9 blue, 13 green; 3 red, 1 blue, 15 green; 3 red, 7 blue, 15 green; 1 green, 1 blue, 3 red; 4 green, 4 blue, 2 red
Game 89: 16 green, 9 blue, 1 red; 3 blue, 6 green, 5 red; 5 blue, 1 green
Game 90: 17 red, 1 blue; 5 red; 2 red, 1 blue, 1 green; 13 red; 11 red, 1 blue, 1 green
Game 91: 4 red, 1 blue; 4 green, 7 red; 13 green, 9 blue; 5 green, 9 blue; 12 red, 6 green, 6 blue
Game 92: 4 red, 1 blue; 2 red, 15 blue; 2 blue, 1 green, 8 red; 1 green, 6 blue, 8 red; 12 blue, 1 green, 8 red; 8 blue, 1 red
Game 93: 8 red, 9 green, 3 blue; 2 green, 1 red, 2 blue; 7 red, 5 blue
Game 94: 1 green, 2 blue, 10 red; 7 red, 3 blue; 1 blue, 6 red, 4 green
Game 95: 1 red, 7 blue, 2 green; 3 red, 14 blue, 2 green; 1 red; 1 red, 14 blue, 1 green; 4 blue, 10 red, 2 green; 9 blue, 7 red
Game 96: 1 green, 10 red, 1 blue; 4 red, 1 green, 2 blue; 3 blue, 8 red
Game 97: 4 red, 3 green; 1 blue, 2 green; 4 green, 4 red; 1 red, 1 blue; 1 green, 3 red; 1 green
Game 98: 7 green, 4 blue, 1 red; 2 red, 5 blue; 4 blue, 3 red, 7 green
Game 99: 7 blue, 13 green; 3 green, 5 red, 12 blue; 2 blue, 14 green, 8 red; 4 red, 6 blue, 2 green; 5 red, 9 green, 13 blue; 8 red, 8 blue, 5 green
Game 100: 8 green, 7 blue, 1 red; 10 blue, 2 green, 5 red; 12 blue, 1 green, 1 red; 9 green, 9 blue, 2 red; 1 blue, 5 red, 3 green
`
