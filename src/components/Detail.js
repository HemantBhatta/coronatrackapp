import React, { Component } from 'react'
import Singledetail from './Singledetail'
import Spinner from './Spinner'
export default class Detail extends Component {

state={
    detail:[]
}

        componentDidMount()
        {
            let id = this.props.match.params.code
            // console.log(id)
            fetch(`https://api.thevirustracker.com/free-api?countryTotal=${id}`)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    detail:data.countrydata
                })
            })
        }

    


    render() {
        if(this.state.detail.length === 0){
            return <Spinner/>
        }
        let roomDetails = this.state.detail.map(dets=>{
            return <Singledetail detail = {dets}/>
        })
       
        return (
            <div>
               {roomDetails}
            </div>
        )
    }
}
