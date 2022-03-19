import Card from "./Components/organisms/card/Card";
import { useState, useEffect } from "react";
import axios from 'axios'
import Nav from "./Components/organisms/Nav/Nav";
import Drink from "./Components/organisms/Drink/Drink";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('filter.php?c=Cocktail')
   

    useEffect(() => {
    

            const fetchitems = async () => {
                try {
                  const result = await axios('https://www.thecocktaildb.com/api/json/v1/1/' + query);
                  setData(result.data.drinks)                   
                }
                catch (error) {
                    alert("Not found! Try again with 'Vodka','Tequila','Rum'/ ")                   
                }
            }  
        fetchitems();
    }, [query])


    return (
        <>

            {data.length === 1 ?
                (
                    <>
                        <Nav text={"DRINK DETAILS"} getApi={(api) => setQuery(api)} />
                        <Drink data={data} getQuery={(q) => setQuery(q)} />
                    </>
                )
                :
                (
                    <>
                        <Nav text={"COCKTAILS MENU"} getApi={(api) => setQuery(api)} />
                        <Card data={data} getId={(e) => setQuery(e)} />
                    </>
                )
            }

        </>
    )

}

export default App;
