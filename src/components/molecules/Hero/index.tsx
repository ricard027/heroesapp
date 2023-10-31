import { HeroTypes } from '@/components/atoms/types'
import { Dumbbell, Trash2 } from 'lucide-react'
import { FunctionComponent } from 'react'

import Image from 'next/image'

const HeroComponent: FunctionComponent<HeroTypes> = ({
  name,
  image,
  combat,
  id,
  selected,
  index,
  handleCardClick,
  removeCurrentHero
}) => {
  return (
    <li
      className={`flex flex-col justify-between bg-white rounded-lg md:w-autosm:w-full relative p-6 border border-gray-50 
       ${selected && 'border-black'}`}
      key={id}
    >
      <div className='relative'>
        <Image
          src={image?.lg}
          alt={`${name} image`}
          className='object-cover w-full rounded-lg'
          width={300}
          height={300}
        />
        <div className='p-6 flex items-center justify-between absolute bottom-2 w-full text-white'>
          <div>
            <p className='text-lg font-semibold '>{name}</p>
          </div>
          <div className='flex items-center gap-2 '>
            <p> {combat}</p>
            <Dumbbell />
          </div>
        </div>
        {selected && (
          <div className='absolute left-0 w-full h-full flex  top-0 items-center justify-center bg-black bg-opacity-60 rounded-lg'>
            <p className='font-semibold text-xl bg-gradient-to-br from-black to-green-950 text-white rounded-lg py-2 px-4'>
              Player {index + 1}
            </p>
          </div>
        )}
      </div>

      <div className='pt-6'>
        {selected ? (
          <button
            className='bg-white rounded-lg w-full py-4 px-8 text-black border flex items-center justify-center gap-6  hover:border-black'
            onClick={() => removeCurrentHero(index)}
          >
            REMOVE <Trash2 />
          </button>
        ) : (
          <button
            className='bg-gradient-to-br from-black to-green-950 w-full py-4 px-8 rounded-lg border text-white opacity-90 hover:opacity-100'
            onClick={() => handleCardClick(id)}
          >
            SELECT HERO
          </button>
        )}
      </div>
    </li>
  )
}

export default HeroComponent
