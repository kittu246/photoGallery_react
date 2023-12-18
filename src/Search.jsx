import React from 'react'
import GlobalContext, { getGlobalContext } from './GlobalContext'
import axios from 'axios';
import { useSearchedData } from './reactQueryCustomHook';
import Gallery from './Gallery';

const Search = () => {

  const {inputValue,setInputValue} = getGlobalContext();
  // const apikey = "4y96nnANgmL7jHDfZXfFwBbHIChUW9vsenT3YY6U0gY";
  // const url = `https://api.unsplash.com/photos/?client_id=${apikey}`
  // const fetchData = async() =>{
  //   try{
  //     const res = await axios.get(url)
  //   }
  //   catch(err){
  //     console.log(err);

  //   }

  // }

  

 
  // console.log(res);

  const handleSubmit=(e)=>{
    e.preventDefault();

    // res = useSearchedData(inputValue);
    setInputValue(e.target.elements.photo.value);// we are not using controlled input value as we need to fetch data just on submit and not every time value changes in input , and also if e can use dynamic search  we can use controlled input , just remember we need to change the queryKey in useQuery hook
    // setInputValue("")
  }

  return (
    <section>
        <h1>UNSPLASH IMAGES</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='cat' name='photo'  />
            <button type='submit'>Submit</button>
        </form>
        {/* <Gallery res={res}/> */}
    </section>
  )
}

export default Search