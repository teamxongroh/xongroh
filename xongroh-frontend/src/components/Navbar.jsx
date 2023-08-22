import Assets from '@/assets/Assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between mt-4 py-5 px-10 bg-white">
      <Link to="/">
        <img src={Assets.home} alt="Home"/>
      </Link>
      <Link to="/about">
        <img src={Assets.search} alt="About"/>
      </Link>
      <Link to="/about">
        <img src={Assets.world} alt="About"/>
      </Link>
      <Link to="/about">
        <img src={Assets.profile} alt="About"/>
      </Link>
    </nav>
  )
}

export default Navbar