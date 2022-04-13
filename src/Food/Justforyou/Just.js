import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchFoodCard from '../Search/SearchCard';
export default function Just(){
  var data =["Pizz","chicken",]
var randData=data[Math.floor(Math.random()*data.length)]
const [recipes,setRecipe]=useState([])
useEffect(()=>{
  getRecipes()
},[])
const getRecipes=async()=>{
const res = await fetch(`https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${randData}`)
const DataRecipe= await res.json()
   setRecipe(DataRecipe.hits)
   console.log(DataRecipe.hits)
}
  return(
<div>
<Flex
    w={'full'}
    h={'30vh'}
    backgroundImage={
      'url(https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}>
      </Flex>
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





