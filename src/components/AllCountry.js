import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'

export default class AllCountry extends Component {

    state={
        alldata:[]
    }

    componentDidMount()
    {
        fetch('https://api.thevirustracker.com/free-api?global=stats')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.results)
            this.setState({alldata:data.results})
        })
        .catch(err=>console.log(err))
    }


    render() {
        console.log(this.state.alldata)

          let alldatum = this.state.alldata.map(datum=>{
              return (
                  <div className="main-section">
                    <h1>Coronavirus Cases:</h1>
                    <p> {datum.total_cases}</p>
                

                    <h1>Deaths</h1>
                    <p>{datum.total_deaths}</p>

                    <h1>Total Recovered</h1>
                    <p>{datum.total_recovered}</p>
                    <h1>Total Active Cases</h1>
                    <p>{datum.total_active_cases}</p>
                    <h1>Total Affected Countries</h1>
                    <p>{datum.total_affected_countries}</p>

                    <h3>
                      <Link to={`/detail`} btn-primary>View By Country</Link>
                    </h3>
                  </div>
              )
          })

         

        return (
            <div>
              {alldatum}
            </div>
        )
    }
}
