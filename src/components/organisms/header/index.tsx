import AvatarComponent from '@/components/molecules/avatar'
import InputComponent from './input'

const HeaderComponent = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-20 bg-black z-50 flex items-center justify-center backdrop-blur-xl bg-opacity-30'>
      <nav className='container m-auto flex justify-between'>
        <div className='flex items-center text-white gap-4 flex-1'>
          <AvatarComponent
            image={
              'https://media.licdn.com/dms/image/D4D03AQGJrk5mfRU66A/profile-displayphoto-shrink_200_200/0/1675891219785?e=1704326400&v=beta&t=PYhFISQl22lzHIiX0XPmAgt1EH5AD3vKFkbjn8wCV6k'
            }
          />
          <p>Name user</p>
        </div>
        <div>
          <InputComponent />
        </div>
      </nav>
    </header>
  )
}

export default HeaderComponent
