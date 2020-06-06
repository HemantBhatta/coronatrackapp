import React, { Component } from 'react'
import App from '../App.css'
import SingleRoom from './SingleRoom'

class Single extends Component {

    state={
        Singledata:[]
    }

    

    render() {

       const {datas} =  this.props
       let datavalues = Object.values(datas)
        let dats = datavalues.map(dat=>{
            return <SingleRoom data={dat}/>
            
        })

        // console.log(dats)
        return (
            <div className="items">
             {dats}

            </div>
        )
    }
}


export default  Single






