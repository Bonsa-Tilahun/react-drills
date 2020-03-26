import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './product.styles.css'
import Card from './Card.component'
class Product extends Component{
    constructor(){
        super()

        this.state={
            products:[]
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
            this.setState({
                products: response.data
            })
        })
    }
     
    render(){
        let prdcts = this.state.products.map(product => {
            return(
                <Link key={product.id} to={`details/${product.id}`}>
                    <Card id={product.id} item={product}/>
                </Link>
            )  
        })
        return(
            <div className="products-container">
                <h1>Monester Collection</h1>
                <div className="card-List">
                    {prdcts}
                </div>
            </div>
        )
    }
}
export default Product