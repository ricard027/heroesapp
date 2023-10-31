export interface Hero {
  id: number
}

export interface HeroTypes {
  name: string
  combat: number
  image: {
    lg: string
  }
  id: any
  index: number
  selected: Boolean
  handleCardClick: (id: Hero) => void
  removeCurrentHero: (id: any) => void
}
