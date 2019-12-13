const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

// Helper function:
// takes in an array, returns random element from array
const randEle = arr => {
  const randIndex = Math.floor(Math.random() * arr.length);

  return arr[randIndex];
};

// 1. Select the form
const form = document.querySelector('form');

const pizzaInit = () => {
  // 2. Listen for a submit event on said form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // 3. Grab user input values
    const sizeSelected = document.querySelector('input[name="size"]:checked').value;  // pie or slice
    const priceSelected = document.querySelector('input[name="price"]:checked').value; // $ or $$
    
    // 4. Filter down our pizza obj based on user input
    const sizeOptions = pizza[sizeSelected];
    // console.log(sizeOptions); // When using variables to grab object properties, square brackets HAS to be used
  
    // 5. Filter down our sizeOptions based on user priceSelected
    const priceOptions = sizeOptions.filter((pizzeria) => {
      return pizzeria.price === priceSelected;
    });
  
    // 6. Get a random pizzeria from priceOptons
    const theOne = randEle(priceOptions);
  
    // 7. Put theOne on the page
    const htmlString = `<h2>Go to ${theOne.title}</h2>`;
    document.querySelector('.results').innerHTML = htmlString;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  pizzaInit();
});
