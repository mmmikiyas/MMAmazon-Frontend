import React from 'react'
import {categoryInfos} from './caterotyFullInfos.js'
import CategoryCard from './CategoryCard'
import classes from '../Category/category.module.css'
function Category() {
  return (
    <section className={classes.category_container}>
        {
          categoryInfos.map((infos,index)=>(
            <CategoryCard data={infos}/>
          ))
            
        
        }
    </section>

  )
}

export default Category
