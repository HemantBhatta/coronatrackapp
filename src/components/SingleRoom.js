import React, { Component } from 'react'
import App from '../App.css'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'



class SingleRoom extends Component {
    render() {
const {data} = this.props


 const {title,code,total_cases,total_active_cases,
 total_deaths,total_new_cases_today,total_new_deaths_today,total_recovered,total_serious_cases} = data




        return (
            <div className="singlecountry">
                    <h1>Country : {title}</h1>
               
                    <h2>
                        <Link to={`detail/${code}`} className="btn-primary">Show Details</Link>
                    </h2>

            </div>
        )
    }
}


export default SingleRoom