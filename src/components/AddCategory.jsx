import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChanged=({target})=>{
        setInputValue(target.value)
    }


//Función para actualizar el estado y categorias enviado desde el componente principal
    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<= 1)  return; 

        // setCategories(categories=>[inputValue,...categories]);
        onNewCategory( inputValue.trim() )
        setInputValue('');  
    }
      return (
        <form   onSubmit={onSubmit}>
            <input
              type='text'
              placeholder="Buscar gifs"
              value={inputValue}
              onChange={onInputChanged}
            />
        </form>
  )
}
