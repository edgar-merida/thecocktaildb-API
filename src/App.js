import Card from "./Components/organisms/card/Card";
import { useState, useEffect } from "react";
import axios from 'axios'
import Nav from "./Components/organisms/Nav/Nav";
import Drink from "./Components/organisms/Drink/Drink";


function App() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('filter.php?c=Cocktail')

    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios('https://www.thecocktaildb.com/api/json/v1/1/' + query)
            setData(result.data.drinks)
        }
        fetchitems();
    }, [query])


    return (
        <>

            {data.length === 1 ?
                (
                    <>
                        <Nav text={"DRINK DETAILS"} />
                        <Drink data={data} getQuery={(q) => setQuery(q)} />
                        {console.log(data)}
                    </>
                )
                :
                (
                    <>
                        <Nav text={"COCKTAILS MENU"} />
                        <Card data={data} getId={(e) => setQuery(e)} />
                    </>
                )
            }

        </>
    )

}

export default App;
