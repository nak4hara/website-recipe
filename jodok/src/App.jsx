import Logo from "./components/atoms/logo/Logo"
import BarIcon from "./components/atoms/menu-bars/BarIcon.jsx"
import SearchBar from "./components/molecules/SearchBar/SearchBar"
import NavBar from "./components/organisms/NavBar/NavBar"


export default function App() {

  return (
    <>
      <div>
        <NavBar />
        <SearchBar />
      </div>
    </>
  )
}
