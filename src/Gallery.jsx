import React from 'react';
import { useSearchedData } from './reactQueryCustomHook';
import { getGlobalContext } from './GlobalContext';

const Gallery = () => {
  
  const {inputValue} = getGlobalContext();
  console.log(inputValue);

  const res = useSearchedData(inputValue);
  console.log(res);

  if (res.isLoading){
    return (
      <div>Is Loading ...</div>
    )
  }
  if(res.isError){
    return (
      <div>{res.error}</div>
    )
  }

  const result = res.data.results;
  console.log(result);
  if(result.length==0){
    return (
      <div>No data</div>
    )
  }
  return (
    <section>
      {result.map((photo) =>{
        let url = photo?.urls?.regular
        return <img src={url}/>
      })}
      
    </section>
  )
}

export default Gallery