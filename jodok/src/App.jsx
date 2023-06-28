import ClockIcon from "./atoms/clock-icon/ClockIcon"
import SearchInput from "./atoms/input/SearchInput"
import Logo from "./atoms/logo/Logo"
import BarIcon from "./atoms/menu-bars/BarIcon.jsx"
import SearchIcon from "./atoms/search-icon/SearchIcon"
import ServingIcon from "./atoms/serving-icon/ServingIcon"

export default function App() {

  return (
    <>
      <div>
        <Logo />
        <BarIcon />
        <SearchIcon />
        <SearchInput />
        <ClockIcon />
        <ServingIcon />
      </div>
    </>
  )
}
