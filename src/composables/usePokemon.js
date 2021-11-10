import { ref } from 'vue'
import axios from 'axios'

const usePokemon = (pokemonId='1') => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()


    const searchPokemon = async() =>{

        isLoading.value = true
        pokemon.value = null

        try{
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            pokemon.value = data
            errorMessage.value = null

            console.log(data);

        }catch(error) {
            errorMessage.value = 'No se pudo cargar ese Pokemon'
        }
        isLoading.value = false
    }
    
    searchPokemon()

    return {
        pokemon, 
        isLoading,
        errorMessage
    }

}

export default usePokemon