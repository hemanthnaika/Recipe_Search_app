import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchFoodCard from '../Search/SearchCard';
export default function Veg(){
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
    h={'20vh'}
    backgroundImage={
      'url(https://media.istockphoto.com/photos/food-background-with-assortment-of-fresh-organic-vegetables-picture-id1203599923?b=1&k=20&m=1203599923&s=170667a&w=0&h=SxSyRNqrW8JQsyh6gCktCwcc16yX-Ymo2-I7NNTRtcA=)'
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