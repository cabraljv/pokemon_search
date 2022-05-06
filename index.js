const express = require('express')
const axios = require('axios')

const app = express()

app.get('/pokemons/:pokeName',async (req,res)=>{
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokeName}`)

    const abilities = data.abilities.map(ability => ability.ability.name)
    const formatted_abilities = abilities.sort((a, b) => a.localeCompare(b))

    return res.status(200).json(formatted_abilities)

  } catch (error) {
    return res.status(404).json({error: 'Pokemon not found'})
  }
})

app.listen(process.env.PORT || 8080,()=>console.log('Server started'))