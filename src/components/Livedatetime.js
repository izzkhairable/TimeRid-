import React,{Component} from 'react'
import Livetime from './Livetime'
import Livedate from './Livedate'

class Livedatetime extends Component{
    constructor(props){
        super(props)
        this.state = {
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        }
        this.intervalId= null
    }

    componentDidMount(){
        this.updateClock()
    }

    updateClock(){
        this.intervalId=setInterval(
            ()=>this.setState(
                {
                    date:new Date().toLocaleDateString(), 
                    time:new Date().toLocaleTimeString()
                }
            )
            ,100)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        return(
            <div className="card" >
                <Livetime time={this.state.time}/>
                <Livedate date={this.state.date}/>
            </div>
        )
    }
}

export default Livedatetime