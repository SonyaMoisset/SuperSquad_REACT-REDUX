import characters_json from '../data/characters.json'

export const createCharacter = id => characters_json.find(hero => hero.id === id)