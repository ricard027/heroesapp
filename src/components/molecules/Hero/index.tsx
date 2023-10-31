import { HeroTypes } from '@/components/atoms/types'
import { Dumbbell } from 'lucide-react'
import { FunctionComponent } from 'react'

const HeroComponent: FunctionComponent<HeroTypes> = ({
  name,
  image,
  combat,
  id
}) => {
  return (
    <li
      className='flex flex-col justify-between bg-white rounded-lg md:w-autosm:w-full relative'
      key={id}
    >
      <div className='relative'>
        <img
          src={image.lg}
          alt={`${name} image`}
          className='object-cover rounded-lg'
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
      </div>

      <div className='p-6'>
        <button className='bg-gradient-to-br from-black to-red-950 w-full py-4 px-8 rounded-lg text-white'>
          Select hero
        </button>
      </div>
    </li>
  )
}

export default HeroComponent
