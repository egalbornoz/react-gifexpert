import { useState } from 'react';
import {GifGrid, AddCategory} from './components'


const personajes=[ 'One Punch' ];

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(personajes);
  
   //Agregar nueva Categoria

   const onAddCategory=(newCategory)=>{
   
   if(categories.includes(newCategory)) return;
   setCategories( [newCategory,...categories] );

}
    return (
   <>
      <h1>Gif Expert App</h1>

    <AddCategory
       onNewCategory= {onAddCategory}  
     />

     {categories.map(category=>   
         (
           <GifGrid
            key={category}
            category={category}
           />
         ))
     }
   </>
   )
}
