import axios from 'axios'

export const apiConfig = {
    baseUrl: 'https://pokeapi.co/api/v2'
}

export default {
    getPokemon: (params) => {
        return axios({
            url: params.url ?? `${apiConfig.baseUrl}/pokemon`,
            method: 'GET', 
        })
    },

    getPokemonByGeneration: generationId => {
        return axios({
            url: `${apiConfig.baseUrl}/generation/${generationId}`,
            method: 'GET', 
        })
    },
    getPokemonPaginatedPage: pagniatedUrl => {
        return axios({
            url: pagniatedUrl,
            method: 'GET', 
        })
    },
    getPokemonDetails: detailsUrl => {
        return axios({
            url: detailsUrl,
            method: 'GET', 
        })
    }
}