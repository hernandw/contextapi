import { Link } from "react-router-dom"


const NavBar = () => {
  return (
      <div className="flex justify-between bg-slate-800 text-white">
      <div>Logo</div>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
            </ul>
      </div>
    </div>
  )
}

export default NavBar
