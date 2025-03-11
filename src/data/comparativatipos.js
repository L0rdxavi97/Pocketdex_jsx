export const comparativatipos = [
    {
      type: "normal",
      weaknesses: ["fighting"],
      strengths: [],
      neutral: ["normal", "fire", "water", "electric", "grass", "ice", "poison", "ground", "flying", "psychic", "bug", "rock", "dragon", "dark", "fairy"]
    },
    {
      type: "fire",
      weaknesses: ["water", "rock", "ground"],
      strengths: ["grass", "ice", "bug", "steel"],
      neutral: ["normal", "fire", "electric", "poison", "flying", "psychic", "ghost", "dragon", "dark", "fairy"]
    },
    {
      type: "water",
      weaknesses: ["electric", "grass"],
      strengths: ["fire", "ground", "rock"],
      neutral: ["normal", "water", "ice", "poison", "flying", "psychic", "bug", "ghost", "dragon", "dark", "steel", "fairy"]
    },
    {
      type: "electric",
      weaknesses: ["ground"],
      strengths: ["water", "flying"],
      neutral: ["normal", "fire", "electric", "grass", "ice", "poison", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]
    },
    {
      type: "grass",
      weaknesses: ["fire", "ice", "poison", "flying", "bug"],
      strengths: ["water", "ground", "rock"],
      neutral: ["normal", "electric", "grass", "psychic", "ghost", "dragon", "dark", "steel", "fairy"]
    },
    {
      type: "ice",
      weaknesses: ["fire", "fighting", "rock", "steel"],
      strengths: ["grass", "ground", "flying", "dragon"],
      neutral: ["normal", "water", "electric", "ice", "poison", "psychic", "bug", "ghost", "dark", "fairy"]
    },
    {
      type: "fighting",
      weaknesses: ["flying", "psychic", "fairy"],
      strengths: ["normal", "ice", "rock", "dark", "steel"],
      neutral: ["fire", "water", "electric", "grass", "poison", "ground", "bug", "ghost", "dragon"]
    },
    {
      type: "poison",
      weaknesses: ["ground", "psychic"],
      strengths: ["grass", "fairy"],
      neutral: ["normal", "fire", "water", "electric", "ice", "fighting", "poison", "flying", "bug", "rock", "ghost", "dragon", "dark", "steel"]
    },
    {
      type: "ground",
      weaknesses: ["water", "grass", "ice"],
      strengths: ["fire", "electric", "poison", "rock", "steel"],
      neutral: ["normal", "fighting", "ground", "flying", "psychic", "bug", "ghost", "dragon", "dark", "fairy"]
    },
    {
      type: "flying",
      weaknesses: ["electric", "ice", "rock"],
      strengths: ["grass", "fighting", "bug"],
      neutral: ["normal", "fire", "water", "poison", "ground", "flying", "psychic", "ghost", "dragon", "dark", "steel", "fairy"]
    },
    {
      type: "psychic",
      weaknesses: ["bug", "ghost", "dark"],
      strengths: ["fighting", "poison"],
      neutral: ["normal", "fire", "water", "electric", "grass", "ice", "ground", "flying", "psychic", "rock", "dragon", "steel", "fairy"]
    },
    {
      type: "bug",
      weaknesses: ["fire", "flying", "rock"],
      strengths: ["grass", "psychic", "dark"],
      neutral: ["normal", "water", "electric", "ice", "fighting", "poison", "bug", "ghost", "dragon", "steel", "fairy"]
    },
    {
      type: "rock",
      weaknesses: ["water", "grass", "fighting", "ground", "steel"],
      strengths: ["fire", "ice", "flying", "bug"],
      neutral: ["normal", "electric", "poison", "psychic", "rock", "ghost", "dragon", "dark", "fairy"]
    },
    {
      type: "ghost",
      weaknesses: ["ghost", "dark"],
      strengths: ["psychic", "ghost"],
      neutral: ["normal", "fire", "water", "electric", "grass", "ice", "poison", "ground", "flying", "bug", "rock", "dragon", "steel", "fairy"]
    },
    {
      type: "dragon",
      weaknesses: ["ice", "dragon", "fairy"],
      strengths: ["dragon"],
      neutral: ["normal", "fire", "water", "electric", "grass", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "steel"]
    },
    {
      type: "dark",
      weaknesses: ["fighting", "bug", "fairy"],
      strengths: ["psychic", "ghost"],
      neutral: ["normal", "fire", "water", "electric", "grass", "ice", "poison", "ground", "flying", "rock", "dragon", "dark", "steel"]
    },
    {
      type: "steel",
      weaknesses: ["fire", "fighting", "ground"],
      strengths: ["ice", "rock", "fairy"],
      neutral: ["normal", "water", "electric", "grass", "poison", "flying", "psychic", "bug", "ghost", "dragon", "dark", "steel"]
    },
    {
      type: "fairy",
      weaknesses: ["poison", "steel"],
      strengths: ["fighting", "dragon", "dark"],
      neutral: ["normal", "fire", "water", "electric", "grass", "ice", "ground", "flying", "psychic", "bug", "rock", "ghost", "fairy"]
    }
  ];
  