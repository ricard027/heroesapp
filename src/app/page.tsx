import HeroComponent from '@/components/molecules/Hero'
import { getHeroes } from '@/utils/getheroes'
import Image from 'next/image'

export default async function Home() {
  const data = await getHeroes()

  return (
    <main className='flex min-h-screen flex-col items-center container  m-auto'>
      <h1 className='text-6xl py-10 text-left w-full'>Heroes app</h1>
      <ul className='grid md:grid-cols-4 gap-4 sm:grid-cols-2 w-full  '>
        {data.slice(0, 42).map((data: any) => (
          <HeroComponent
            name={data.name}
            combat={data.powerstats.combat}
            image={data.images}
            id={data.id}
            key={data.id}
          />
        ))}
      </ul>
    </main>
  )
}
