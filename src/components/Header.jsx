import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-6 mx-2 max-w-6xl sm:mx-auto'>
      <div className='flex'>
        <MenuItem title='HOME' address='/' Icon={AiFillHome} />
        <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill} />
      </div>

      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold cursor-default dark:text-white bg-amber-500 py-1 px-2 rounded-lg mr-1'>
              IMDb
            </span>
            <span className='text-xl px-4 hidden sm:inline dark:text-white'>
              Clone
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
