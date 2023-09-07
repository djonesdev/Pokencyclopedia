import axios from 'axios'

const config = {
    baseUrl: 'https://pokeapi.co/api/v2'
}

export default {
    getPokemon: (params) => {
        return axios({
            url: `${config.baseUrl}/pokemon`,
            method: 'GET', 
        })
    },
    getAllPokemon: () => {
        return axios({
            url: `${config.baseUrl}/pokemon/?limit=811`,
            method: 'GET', 
        })
    },
    getPokemonByGeneration: generationId => {
        return axios({
            url: `${config.baseUrl}/generation/${generationId}`,
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