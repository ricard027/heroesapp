export interface IHeroAttributes {
  combat: number
  durability: number
  intelligence: number
  power: number
  speed: number
  strength: number
}
export const checkWhoWon = (
  firstHero: IHeroAttributes,
  secondHero: IHeroAttributes
): boolean => {
  let firstHeroScore = 0
  let secondHeroScore = 0

  for (let key in firstHero) {
    if (
      firstHero[key as keyof IHeroAttributes] >
      secondHero[key as keyof IHeroAttributes]
    ) {
      firstHeroScore++
    } else if (
      firstHero[key as keyof IHeroAttributes] <
      secondHero[key as keyof IHeroAttributes]
    ) {
      secondHeroScore++
    }
  }

  return firstHeroScore > secondHeroScore
}
