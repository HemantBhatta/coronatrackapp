import React, { Component } from 'react'

export const myContext = React.createContext()

class ContextPro extends Component {


state={

    Alldata:[]
}

componentDidMount()
{
    const url = 'https://api.thevirustracker.com/free-api?countryTotals=ALL';    
    fetch(url)
    .then(res=>{
       const re = res.json();
       return re;
    })
    .then(data=>{
        
        this.setState({
            Alldata:data.countryitems
        })
    })
        
}


    render() {
        return (
            <myContext.Provider value={this.state}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

export default ContextPro
