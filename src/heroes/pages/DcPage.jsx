import React from 'react'
import { HeroeList } from '../components'

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr></hr>

      <HeroeList publisher={ 'DC Comics' }/>
    </>
  )
}
