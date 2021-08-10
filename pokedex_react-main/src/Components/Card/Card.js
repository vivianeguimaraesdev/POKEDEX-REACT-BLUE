import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

 export default function Card(info) {

  const [pokemon, setPokemon] = useState(info.info);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(() => {
     fetch(info.info.url)
     .then(res => res.json())
     .then( (result) => {
       setPokemon(result)
       setLoading(false)
     })
     .catch((error) => {
       console.log(error)
       setLoading(true)
     })
  }, [info.info.url]);

  useEffect(() => {
    getData();
  }, [getData])

  let id = ('000' + pokemon.id).slice(-3);

  return(
    <Link className="link" to={{pathname: "/sobre/" + pokemon.id, state: pokemon}}>
      <div className="card">
        <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemon.name} />
        <div className="card-info">
          <p className="card-id">{'#' + id}</p>
          <h2 className="card-name">{pokemon.name}</h2>
          <div className="card-category">
            {
              loading ? <span className="category"></span> : 

              pokemon.types.map( (item) => (
                <span key={item.type.name} className={'category category--' + item.type.name}>{item.type.name}</span>
              ))
            }
          </div>
        </div>
      </div>
    </Link>
  )
 }