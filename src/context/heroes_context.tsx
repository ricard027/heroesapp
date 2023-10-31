'use client'
import React, { createContext, useState, ReactNode } from 'react'

export const HeroesContext = createContext({})

const HeroesProvider = ({ children }: { children: ReactNode }) => {
  const [heroes, setHeroes] = useState([])
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        filteredHeroes,
        handleFilterChange,
        setHeroes,
        filter
      }}
    >
      {children}
    </HeroesContext.Provider>
  )
}

export default HeroesProvider
