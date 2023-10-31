export interface HeroTypes {
  name: string
  combat: number
  image: string
  id: number
  index: number
  selected: Boolean
  handleCardClick: (id: number) => void
  removeCurrentHero: (id: number) => void
}
