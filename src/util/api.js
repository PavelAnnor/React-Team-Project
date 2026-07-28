
export default async function fetchData(query){


    try {
         const url = `https://dummyjson.com/products/search?q=${query}&limit=0`;
         const result = await fetch(url);
         const data = await result.json();
         console.log(data.products);
        
    } catch (error) {
        
        console.log(error)
    }


   


}



