import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/';
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {
  
  const heroes = useMemo( () => getHeroesByPublisher( publisher ));

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
        {
            heroes.map( h => (
                <HeroCard 
                    key={ h.id } 
                    hero={ h }
                />
            ))
        }
    </div>
  )
}
