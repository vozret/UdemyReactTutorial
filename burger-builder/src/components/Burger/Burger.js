import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // how to get an array from object
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // create an array with a number of the given ingKey
            // e.g. salad: 2 -> array length 2
            return [...Array(props.ingredients[igKey])]
            // [,]
                .map((_, i) => {
                    // e.g. salad + 2
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
        })
        // reduce transforms array into something else
        // excepts previous and current value
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;