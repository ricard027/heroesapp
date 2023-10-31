'use client'
import { useContext, useEffect, useState } from 'react'

import { getHeroes } from '@/utils/getheroes'

import { Modal } from '@/components/molecules/modal'
import HeroComponent from '@/components/molecules/Hero'
import HeaderComponent from '@/components/organisms/header'

import { HeroesContext } from '@/context/heroes_context'
import { Hero } from '@/components/atoms/types'

export default function Home({ initialData }: any) {
  const [selectedCards, setSelectedCards] = useState<Hero[]>([])

  const { filteredHeroes, setHeroes, heroes } = useContext(HeroesContext)

  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        try {
          const data = await getHeroes()
          setHeroes(data)
        } catch (error) {
          console.error('Erro ao buscar heróis:', error)
        }
      }
      fetchData()
    }
  }, [initialData])

  const handleCardClick = (id: Hero) => {
    if (selectedCards.length < 2) {
      if (selectedCards.includes(id)) {
        setSelectedCards(selectedCards.filter((cardId) => cardId !== id))
      } else {
        setSelectedCards([...selectedCards, id])
      }
    }
  }

  const isReady = Boolean(selectedCards?.length === 2 ?? 0)
  const clearSelecteds = () => {
    return setSelectedCards([])
  }

  const removeCurrentHero = (id: number) => {
    const filtered = selectedCards.filter((hero) => hero.id !== id)

    if (filtered) {
      setSelectedCards(filtered)
    }
  }
  const currentArrayHeroes = filteredHeroes ? filteredHeroes : heroes
  return (
    <main className='flex min-h-screen flex-col items-center container  m-auto'>
      <HeaderComponent />
      <div className='h-20 w-full' />
      {isReady && (
        <Modal
          clear={clearSelecteds}
          allHeroes={heroes}
          selecteds={selectedCards}
        />
      )}
      <h1 className='text-6xl py-10 text-left w-full'>Heroes app</h1>
      <ul className='grid md:grid-cols-4 gap-4 sm:grid-cols-2 w-full  '>
        {currentArrayHeroes.slice(0, 40).map((data: any, index: number) => (
          <HeroComponent
            name={data.name}
            combat={data.powerstats.combat}
            image={data.images}
            id={data.id}
            index={index}
            key={data.id}
            selected={selectedCards?.includes(data?.id)}
            handleCardClick={handleCardClick}
            removeCurrentHero={removeCurrentHero}
          />
        ))}
      </ul>
    </main>
  )
}
