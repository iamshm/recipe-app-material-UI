import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import cx from 'classnames';
import { Grid } from '@material-ui/core';

const App = () => {
  const API_ID = "54b0f32d";
  const API_KEY = "ca2a365875ec5c0a29444f0a2acd08e0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [item, setItem] = useState('pasta');
  useEffect(() => {
    getRecipes();
  }, [item]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${item}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getItem = e => {
    e.preventDefault();
    setItem(search);
    setSearch('');
  }

  return (
    <div className={cx(styles.body)}>
      <Grid container justify="center" className={cx(styles.search)} >
        <Header />
        <Grid item sm={1}></Grid>
        <Grid item={true} xs={12} sm={10} >
          <form className={cx(styles.searchForm)} onSubmit={getItem}>
            <input type='text' placeholder="Search a delicious food" spellCheck="false" className={cx(styles.searchInput)} value={search} onChange={updateSearch} />
            <button className={cx(styles.searchButton)} type="submit" >Search </button>
          </form>
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid>
      {/* <Grid container sm={1}></Grid> */}
      <div className={cx(styles.itemContainer)}>
        <Grid container sm={10} justify="center" className={cx(styles.items)}>

          {recipes.map(recipe => (
            <Recipes key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} imageUrl={recipe.recipe.image} source={recipe.recipe.source} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
