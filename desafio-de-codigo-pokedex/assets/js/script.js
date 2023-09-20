const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonListElement = document.getElementById('pokemon-list');

    function fetchAndDisplayPokemonDetails(pokemonId) {
            fetch(`${baseUrl}${pokemonId}`)
                .then(response => response.json())
                .then(data => {
                    const listItem = document.createElement('div');
                    listItem.classList.add('pokemon-item');
                    listItem.innerHTML = `
                        <h2>${data.name}</h2>
                        <p><strong>Tipo:</strong> ${data.types[0].type.name}</p>
                        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
                        <p><strong>Altura:</strong> ${data.height / 10} m</p>
                        <img src="${data.sprites.front_default}" alt="Imagem do ${data.name}">
                    `;
                    pokemonListElement.appendChild(listItem);
                })
                .catch(error => {
                    console.error(`Erro ao buscar os detalhes do Pokémon ${pokemonId}:`, error);
                });
        }

        for (let i = 1; i <= 10; i++) {
            fetchAndDisplayPokemonDetails(i);
        }
   
