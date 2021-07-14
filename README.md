# sb_39-03-15-react-props-pokedex

## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: N/A

## Launching the App
1. Set up the environment via `npx create-react-app` .
1. Replace the `src` folder in the resulting `npx` setup with the `src` folder for the Pokedex app.
1. Once the `src` folder in in place, issue `npm start` from bash. 

## Assignment Details

Further practice with React components and properties by creating a pokemon application. The applicaiton consists of 5 components.

`App` renders the `Pokedex` component by passing it the array of pokemons in `PokemonChars.js`

`PokemonChars` is an array declaration with 8 Pokemon characters. Each character object in the array has an id, name, type, and base_experience.

`Pokedex` is a component that receives the array of Pokemon characters from App and renders a h1 and calls a map function to build PokemonCard component and Pokemon component.

`PokemonCard` component is a grey background div element with a title and children components. The pokemons.map() in Pokedex passes the character name as the title for PokemonCard and the Pokemon component. PokemonCard.css has the necessary styling for the grey 'card' and h1.

`Pokemon` component renders an image of the pokemon character, the character `type`, and the `base_experience`. `id` + an image url yields a png image of the pokemon character and `name` is used in the alt tag for the image. Pokemon.css has the necessary styling for the image size and the type-experience paragraph.


**Enhancements**
- All .css files were moved to a `static` folder.
- Creation of a PokemonCard component to render a gray card. PokemonCard accepts a title parameter and an array of children components.


**Difficulties**
- Getting aclimated with React. All the little things with JavaScript that have come back very angry. {} maddness, arrow functions, implicit returns, did I mention {} heirarchy maddness? 
- Not really a difficulty, but I definitely see why there was a focus previously in the course to write smaller, modular pieces. If anything, right now, that is the bit to get used too -- all the different files involved in an applcattion, and how to organize them too.