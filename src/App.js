import React, {useState , useEffect} from  'react';
import './App.css';
import Header from './component/Header';
import Recipe from './component/Recipe';
import Axios from "axios";



function App() {
  const [search , setSearch ] = useState ("banana"); 
  const [recipes,setRecipes] =useState([]);

  const APP_ID="8fde0ed0";
  const APP_KEY="a3f5cc7b98b8df7bbfecf818fc1ae3dd";

  useEffect(() => {
        getRecipe();
  },[]);

  const getRecipe = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits)
    
 }


  const onInputChange = (e) => {
      setSearch(e.target.value)
  }
  const onSearchClick = () =>{
    getRecipe();
  }
  return (
    <div className="App">
      <Header search={search}  
              onInputChange={onInputChange}
              onSearchClick={onSearchClick}
              />
      <div className="container">
        <Recipe recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
