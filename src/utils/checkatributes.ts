export interface IcheckNumbers {
  (firstNumber: number, secondNumber: number): Boolean
}

export const checkatributes: IcheckNumbers = (firstNumber, secondNumber) => {
  return Boolean(firstNumber > secondNumber)
}
