import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

export default function Info(info) {

  const [pokemons, setPokemons] = useState(info.location.state);

  let id = ('000' + pokemons.id).slice(-3);

  return (
    <section className="info">
      <div className="info-card">
        <div className="info-header">{pokemons.name}</div>
        <div className="info-body">

          <div className='bloco-esquerda'>
            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemons.name} />
            <div className="type">
            <p><strong>Tipo</strong></p>
            {
              pokemons.types.map((item) => (
                <span key={item.type.name} className={'category category--' + item.type.name}>{item.type.name}</span>
              ))
            }
          </div>
          </div>

          <div className='bloco-direita'>
          <div className='linha1'>
            <div className="info-block caracteristicas">
              <p><strong>Altura:</strong> {pokemons.height}</p>
              <p><strong>Peso:</strong> {pokemons.weight}</p>
              <p><strong>Habilidades:</strong></p>
              {
                pokemons.abilities.map((item) => (
                  <p key={item.ability.name}>{item.ability.name}</p>
                ))
              }
            </div>

            <div className="info-block status">
              <p><strong>Status</strong></p>
              {
                pokemons.stats.map((item) => (
                  <p><strong>{item.stat.name}:</strong> {item.base_stat}</p>
                ))
              }
            </div>
          </div> {/* LINHA 1 */}

          <div className="info-block movimentos">
            <p><strong>Movimentos</strong></p>
            <p>
            {
              pokemons.moves.map((item) => (
                item.move.name + ', '
              ))
            }
            </p>
          </div>
          </div>

          
        </div>
        <div className="info-footer">
          <Link className="link" to="/">Voltar</Link>
        </div>
      </div>
    </section>
  );
}