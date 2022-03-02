import { useState } from 'react'

export default function SearchBar({getAPI}) {
  const [searchState, setSearchState] = useState('')

  function handleChange(evt) {
    setSearchState(evt.target.value)
  }
  
  function search(evt){
    evt.preventDefault()
    getAPI(searchState)
    setSearchState('')
  }

  return (
    <>
      <h1>Hi</h1>
      <form onSubmit={search}>
        <input value={searchState} name="search" placeholder="search" onChange={handleChange}/>
        <button>Search</button>
      </form>
    </>
  )
}