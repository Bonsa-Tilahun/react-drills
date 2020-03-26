import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card.component'
import './details.styles.css'

class Detail extends Component{
    constructor(){
        super()

        this.state={
            item:''
        }
        
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                item: response.data
            })
        })
    }

    render(){
        return(
            // <div className="card-container">
            //     <img alt="monster" src={'https://robohash.org/' + this.props.match.params.id + '?set=set2&size=180x180'}/>
            //     <h2> {this.state.item.name} </h2>
            //     <p> {this.state.item.email}</p>
            // </div>
            <div className="details-containers">
                <h1>Here is moster {this.state.item.name}'s Information</h1>
                <div className="details-profile">
                    <Card item={this.state.item} id={this.props.match.params.id}/>
                </div>
                <div>
                    <h4>More Info:</h4>
                    <p>Uername: {this.state.item.username}</p>
                    <p>Company-Info: {JSON.stringify(this.state.item.company)}</p>
                    <p>Website: {this.state.item.website}</p>
                </div>
            </div>
        )
    }

}

export default Detail