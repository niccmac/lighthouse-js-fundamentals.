

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let finalRecipe;


  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (let a = 0; a < bakeryA.length; a++) {
        for (let b = 0; b < bakeryB.length; b++)
          if (recipes[i].ingredients[j] === bakeryA[a] || recipes[i].ingredients[j] === bakeryB[b]) {
            for (let r = [j + 1]; r < recipes[i].ingredients.length; r++) {
              if (recipes[i].ingredients[r] === bakeryB[b] || recipes[i].ingredients[r] === bakeryA[a]) {
                finalRecipe = recipes[i].name;
              }
            }
          }
      }
    }
  }
  return finalRecipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));