import React, { Component } from 'react'
import {myContext} from '../Context'
import Single from './Single'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'


class Home extends Component {
    static contextType = myContext
    render() {
        const {Alldata} = this.context
       
        return (
            <div className="inner-section">
              <h3>  <Link to={`/`} className="btn-primary">Go Back</Link></h3>
             {Alldata.map((data,index)=>{
                 return <Single key={index} datas={data}/>
             })}
            
            </div>
        )
    }
}

export default Home
