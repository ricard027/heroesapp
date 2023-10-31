'use client'
import { useEffect, useState } from 'react'

import { getHeroes } from '@/utils/getheroes'

import HeroComponent from '@/components/molecules/Hero'
import { Modal } from '@/components/molecules/modal'

export default function Home({ initialData }) {
  const [selectedCards, setSelectedCards] = useState([])
  const [heroes, setHeroes] = useState([])

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

  const handleCardClick = (id: number) => {
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
    const current = selectedCards.splice(id, selectedCards.length)
    const filtered = selectedCards.filter((hero) => hero.id !== current.id)

    if (filtered) {
      setSelectedCards(filtered)
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center container  m-auto'>
      {isReady && (
        <Modal
          clear={clearSelecteds}
          allHeroes={heroes}
          selecteds={selectedCards}
        />
      )}
      <h1 className='text-6xl py-10 text-left w-full'>Heroes app</h1>
      <ul className='grid md:grid-cols-4 gap-4 sm:grid-cols-2 w-full  '>
        {heroes.slice(0, 40).map((data: any, index: number) => (
          <HeroComponent
            name={data.name}
            combat={data.powerstats.combat}
            image={data.images}
            id={data.id}
            index={index}
            key={data.id}
            selected={selectedCards?.includes(data?.id) ?? ''}
            handleCardClick={handleCardClick}
            removeCurrentHero={removeCurrentHero}
          />
        ))}
      </ul>
    </main>
  )
}
