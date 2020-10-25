import React from 'react'


class Livetime extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date().toLocaleTimeString()}
        this.intervalId = null
    }

    // If you want to implement the logic directly here 
    //
    // componentDidMount(){
    //     this.updateClock()
    // }

    // componentWillUnmount(){
    //     clearInterval(this.intervalId)
    // }

    // updateClock(){
    //    this.intervalId = setInterval(()=>this.setState({date: new Date().toLocaleTimeString()}),1000)
    // }

    render(){
        return (
            <div>
                <h3 className="center-align orange-text text-accent-4" style={{fontWeight:'600', paddingTop:'15px'}}>{this.props.time}</h3>
            </div>
        )
    }

}

export default Livetime