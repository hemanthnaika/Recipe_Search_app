import { Button, Flex, Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import SearchFoodCard from "./SearchCard"
import { useEffect, useState } from 'react'

export default function Search(){
const [recipes,setRecipe]=useState([])
const [data,setData]=useState('Vegetarian')

useEffect(()=>{
  getRecipes()
},[])
const getRecipes=async()=>{
const res = await fetch(`https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${data}`)
const DataRecipe= await res.json()
   setRecipe(DataRecipe.hits)
   console.log(DataRecipe.hits)
}

  return(
    <div>
          <Flex
    w={'full'}
    h={'20vh'}
    backgroundImage={
      'url(https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}></Flex>
    <HStack marginTop={'30px'} spacing='10px'>
      <Box marginLeft={'10%'} w={'60%'}>
      <Input onChange={e=>{setData(e.target.value)}}  placeholder='Enter the Recipe' size='lg'  />
      </Box>
      <Box  >
       <Button onClick={getRecipes}  w={'80%'} leftIcon={<SearchIcon  />} colorScheme='teal' size='lg' >Search</Button>
      </Box>
    </HStack>
<Flex justifyContent={'center'} flexWrap={'wrap'}>
    {recipes.map(recipe=>(
  < SearchFoodCard 
  title={recipe.recipe.label} 
  calories={recipe.recipe.calories} 
  image={recipe.recipe.image} 
  ingredients={recipe.recipe.ingredients} 
  cuisineType={recipe.recipe.cuisineType} 
  />
))}
</Flex>
    </div>
  )
}