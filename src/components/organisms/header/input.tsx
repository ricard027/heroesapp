import { Input } from '@/components/ui/input'
import { HeroesContext } from '@/context/heroes_context'
import { Search } from 'lucide-react'
import { useContext } from 'react'

const InputComponent = () => {
  const { handleFilterChange, filter } = useContext(HeroesContext)

  return (
    <div className='relative flex items-center'>
      <Input
        type='text'
        onChange={handleFilterChange}
        value={filter}
        className='pl-10'
      />
      <Search className='absolute left-3' />
    </div>
  )
}
export default InputComponent
