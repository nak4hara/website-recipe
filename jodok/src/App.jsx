
import { Routes, Route } from "react-router-dom";
import BarIcon from "./components/atoms/menu-bars/BarIcon.jsx"
import SearchBar from "./components/molecules/SearchBar/SearchBar"
import SearchBarAlternative from "./components/molecules/SearchBar/SearchBarAlt";
import NavBar from "./components/organisms/NavBar/NavBar"


export default function App() {
  const recipesList = [
    {
      title: "Beef and Broccoli",
      img: "https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg",
      description: "One of the best recipes we found out and probably top 5 of Jodok's favourite dishes",
      link: "beef-and-broccoli",
    },

    {
      title: "French crêpe",
      img: "https://www.sweetashoney.co/wp-content/uploads/French-Crepes-6-768x432.jpg",
      description: "Easy recipe, it fits perfectly with salted caramel sauce or doce de leite.",
      link: "french-crepe",
    },

    {
      title: "Fudgy Brownie",
      img: "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg",
      description: "Irresistible dessert full of cacao flavor, perfect for a picnic.",
      link: "fudgy-brownie",
    },

    {
      title: "Gyoza",
      img: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Gyoza-3096-II-768x1152.jpg",
      description: "A classic japanese recipe, perfect to make with friends and family",
      link: "gyoza",
    },

    {
      title: "Salted caramel sauce",
      img: "https://static01.nyt.com/images/2019/01/19/dining/12CHOCPANCAKES3/12CHOCPANCAKES3-articleLarge.jpg",
      description: "Jeeesus, you should try this one. Jodok is crazy about this sauce.",
      link: "salted-caramel-sauce",
    },

    {
      title: "Miso Ramen",
      img: "https://www.justonecookbook.com/wp-content/uploads/2019/05/Miso-Ramen-I-768x512.jpg",
      description: "I don't even know how many times we did this ramen, really tasty.",
      link: "miso-ramen",
    },

    {
      title: "Caramel popcorn",
      img: "https://i0.wp.com/thehobbywife.com/wp-content/uploads/2019/03/Easy-Caramel-Popcorn-so-easy-to-make-1-1.jpg?resize=735%2C466&ssl=1",
      description: "Jodok said it is as awesome snacks to watch movies, I still have not tried hihi.",
      link: "caramel-popcorn",
    },

    {
      title: "Chocolate cake",
      img: "https://i.pinimg.com/originals/20/fd/a6/20fda6aeaccc80caf68af1c1f15ea799.jpg",
      description: "Chocolate cake made on a skillet, try it with brazilian chocolate sauce.",
      link: "chocolate-cake",
    },

    {
      title: "Homemade Lasagna",
      img: "https://www.spendwithpennies.com/wp-content/uploads/2020/05/Lasagna-SpendWithPennies-22-768x1152.jpeg",
      description: "Easy recipe but the result it's amazing, I ate for the whole week.",
      link: "lasagna",
    },

    {
      title: "Zwiebelkuchen",
      img: "https://img.chefkoch-cdn.de/rezepte/1243811229272585/bilder/704511/crop-642x428/schwaebischer-zwiebelkuchen.jpg",
      description: "An german savory cake, lots of caramelized onion.",
      link: "zwiebelkuchen",
    },
  ];

  return (
    <>
      <div>
        <NavBar />
        <SearchBar recipesTitle={recipesList.map(
          recipe => {
            return (
              {
                value: recipe.title,
                id: recipe.link
              }
            )
          }
        )} />
        <SearchBarAlternative data={recipesList} />
      </div>
      <div className="routes">
      </div>
    </>
  )
}
