import React from 'react'
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { getHeroByName } from '../helpers';
//import { queryString } from "query-string";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();  
  const { q='' } = queryString.parse( location.search );
  const heroes = getHeroByName(q);

  //console.log(query);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  });

  const onSearchSubmit = ( event )=> {
    event.preventDefault();        
    navigate(`?q=${ searchText }`);
    onResetForm();
  }

  const onSearch = () => {

  }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className='row'>
      <div className="col-5">
        <h4>Searching</h4>
        <hr/>
        <form onSubmit={ onSearchSubmit }>
          <input type='text'
                 placeholder='Search a hero'
                 className='form-control'
                 name='searchText'
                 value={ searchText }
                 onChange={ onInputChange }
                 autoComplete='off'/>
          <button className='btn btn-outline-primary mt-1'>
            Search
          </button>
        </form>
      </div>

      <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            ( q === '' )
            ? <div className='alert alert-primary'> Search a hero</div>
            : ( heroes.length === 0) && <div className='alert alert-danger'> No hero with <b>{ q }</b></div>
          }
                
          {
            heroes.map( hero => 
              <HeroCard key={ hero.id } hero={ hero }></HeroCard>
            )
          }
      </div>
      </div>
    </>
  )
}
