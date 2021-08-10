import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    .then( res => res.json() )
    .then( (result) => {
      setPokemons(result.results)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(true)
    })
  }

  useEffect( () => {
    getData();
  }, []);
  

  return(
    <>
      <div className="card-list">
        {
          loading ? (
            <Card></Card>
          ) : (
            pokemons.map( (item) => (
              <Card key={item.name} info={item}></Card>
            ))
          )
        }
      </div>
    </>
  )
}