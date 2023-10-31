import React, { createContext, useState, ReactNode, ChangeEvent } from 'react'

interface Hero {
  name: string
}

interface HeroesContextProps {
  heroes: Hero[]
  filteredHeroes: Hero[]
  handleFilterChange: (event: ChangeEvent<HTMLInputElement>) => void
  setHeroes: React.Dispatch<React.SetStateAction<Hero[]>>
  filter: string
}

const initialContext: HeroesContextProps = {
  heroes: [],
  filteredHeroes: [],
  handleFilterChange: () => {},
  setHeroes: () => {},
  filter: ''
}

export const HeroesContext = createContext<HeroesContextProps>(initialContext)

const HeroesProvider = ({ children }: { children: ReactNode }) => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase())
  )

  const contextValue: HeroesContextProps = {
    heroes,
    filteredHeroes,
    handleFilterChange,
    setHeroes,
    filter
  }

  return (
    <HeroesContext.Provider value={contextValue}>
      {children}
    </HeroesContext.Provider>
  )
}

export default HeroesProvider
