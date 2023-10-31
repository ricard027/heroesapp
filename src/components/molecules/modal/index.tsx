import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { checkWhoWon } from '@/utils/check_woh_won'
import AvatarComponent from './avatar'
import Image from 'next/image'

import { checkatributes } from '@/utils/checkatributes'
import { DialogClose } from '@radix-ui/react-dialog'
import { ChevronsDown, ChevronsUp } from 'lucide-react'

export function Modal({ clear, allHeroes, selecteds }) {
  const fisrtHero = allHeroes.find((hero) => hero.id === selecteds[0])
  const secondHero = allHeroes.find((hero) => hero.id === selecteds[1])

  const checking = checkWhoWon(fisrtHero.powerstats, secondHero.powerstats)

  return (
    <Dialog defaultOpen>
      <DialogContent className='sm:max-w-6xl'>
        <DialogHeader>
          <DialogTitle className='text-center text-lg justify-center flex-col flex items-center gap-4 w-full'>
            <p className='text-3xl text-green-500 font-bold'>WINNER</p>
            <div className='flex items-center gap-4'>
              <AvatarComponent
                image={checking ? fisrtHero.images.xs : secondHero.images.xs}
              />
              <p>{checking ? fisrtHero.name : secondHero.name}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className='flex justify-between py-4'>
          <div className=' flex-1 flex gap-6 items-center'>
            <div className=' w-full flex flex-col gap-6 h-full'>
              <div className='flex-1 w-full bg-cover  rounded-lg'>
                <Image
                  src={fisrtHero?.images?.md}
                  alt={`${fisrtHero.name} image`}
                  className='h-full w-full object-cover'
                  height={300}
                  width={300}
                />
              </div>
              <p className='text-lg font-medium'>{fisrtHero.name}</p>
            </div>
            <ul>
              <li
                className={`flex items-center ${
                  checkatributes(
                    fisrtHero.powerstats.combat,
                    secondHero.powerstats.combat
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {checkatributes(
                  fisrtHero.powerstats.combat,
                  secondHero.powerstats.combat
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
                {fisrtHero.powerstats.combat}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    fisrtHero.powerstats.durability,
                    secondHero.powerstats.durability
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {checkatributes(
                  fisrtHero.powerstats.durability,
                  secondHero.powerstats.durability
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
                {fisrtHero.powerstats.durability}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    fisrtHero.powerstats.intelligence,
                    secondHero.powerstats.intelligence
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {checkatributes(
                  fisrtHero.powerstats.intelligence,
                  secondHero.powerstats.intelligence
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
                {fisrtHero.powerstats.intelligence}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    fisrtHero.powerstats.power,
                    secondHero.powerstats.power
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {checkatributes(
                  fisrtHero.powerstats.power,
                  secondHero.powerstats.power
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
                {fisrtHero.powerstats.power}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    fisrtHero.powerstats.speed,
                    secondHero.powerstats.speed
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {checkatributes(
                  fisrtHero.powerstats.speed,
                  secondHero.powerstats.speed
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
                {fisrtHero.powerstats.speed}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    fisrtHero.powerstats.strength,
                    secondHero.powerstats.strength
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {checkatributes(
                  fisrtHero.powerstats.strength,
                  secondHero.powerstats.strength
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
                {fisrtHero.powerstats.strength}
              </li>
            </ul>
          </div>
          <div className='flex flex-col justify-between h-full flex-1 '>
            <ul className='flex flex-col items-center justify-center h-full text-lg'>
              <li>Combat</li>
              <li>Durability</li>
              <li>Inteligence</li>
              <li>Power</li>
              <li>Speed</li>
              <li>Strength</li>
            </ul>
          </div>
          <div className=' flex-1 flex gap-6 items-center'>
            <ul>
              <li
                className={`flex items-center ${
                  checkatributes(
                    secondHero.powerstats.combat,
                    fisrtHero.powerstats.combat
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {secondHero.powerstats.combat}
                {checkatributes(
                  secondHero.powerstats.combat,
                  fisrtHero.powerstats.combat
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    secondHero.powerstats.durability,
                    fisrtHero.powerstats.durability
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {secondHero.powerstats.durability}
                {checkatributes(
                  secondHero.powerstats.durability,
                  fisrtHero.powerstats.durability
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    secondHero.powerstats.intelligence,
                    fisrtHero.powerstats.intelligence
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {secondHero.powerstats.intelligence}
                {checkatributes(
                  secondHero.powerstats.inteligence,
                  fisrtHero.powerstats.inteligence
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    secondHero.powerstats.power,
                    fisrtHero.powerstats.power
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {secondHero.powerstats.power}
                {checkatributes(
                  secondHero.powerstats.power,
                  fisrtHero.powerstats.power
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    secondHero.powerstats.speed,
                    fisrtHero.powerstats.speed
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {secondHero.powerstats.speed}
                {checkatributes(
                  secondHero.powerstats.speed,
                  fisrtHero.powerstats.speed
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
              </li>
              <li
                className={`flex items-center ${
                  checkatributes(
                    secondHero.powerstats.strength,
                    fisrtHero.powerstats.strength
                  )
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {secondHero.powerstats.strength}
                {checkatributes(
                  secondHero.powerstats.strength,
                  fisrtHero.powerstats.strength
                ) ? (
                  <ChevronsUp />
                ) : (
                  <ChevronsDown />
                )}
              </li>
            </ul>{' '}
            <div className=' w-full flex flex-col gap-6 h-full'>
              <div className='flex-1 w-full bg-cover  rounded-lg'>
                <Image
                  src={secondHero?.images?.md}
                  alt={`${secondHero.name} image`}
                  className='h-full w-full object-cover'
                  height={300}
                  width={300}
                />
              </div>
              <p className='text-lg font-medium'>{secondHero.name}</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose onClick={clear} asChild>
            <Button size={'lg'}>Try again</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
