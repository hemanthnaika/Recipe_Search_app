import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchFoodCard from '../Search/SearchCard';
export default function NonVeg(){
  var data =["chicken","Egg-free","Fish-free","Gluten-free","Lupine-free","Mustard-free","Peanut-free","Sesame-free"," Shellfish-free","Soy-free","Tree-Nut-free","Wheat-free"]
var randData=data[Math.floor(Math.random()*data.length)]
const [recipes,setRecipe]=useState([])
useEffect(()=>{
  getRecipes()
},1000)
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
    h={'20vh'}
    backgroundImage={
      'url(https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm9uJTIwdmVnJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}></Flex>
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