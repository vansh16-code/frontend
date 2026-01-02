import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>My cohort app</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Projects">Projects</Link>
      </nav>
    </header>
  )
}

