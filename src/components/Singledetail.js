import React from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'


export default function Singledetail({detail}) {

    const {total_cases,total_active_cases,total_deaths,total_new_cases_today,
        total_new_deaths_today,total_recovered,total_serious_cases} = detail
    return (
        <div className="alldetail">
                <div className="innerdetail">
                    <p>Total cases: {total_cases}</p>
                    
                    <p>Total active cases: {total_active_cases}</p>
                    <p>Total death: {total_deaths}</p>
                    <p>Case today: {total_new_cases_today}</p>
                    <p>Death today: {total_new_deaths_today}</p>
                    <p>Recovered: {total_recovered}</p>
                    <p>Serious: {total_serious_cases}</p>

                    <h1>
                        <Link to={"/detail"} className="btn-primary">
                        Go Back
                        </Link>
                    </h1>
                </div>
        </div>
    )
}
