import React from 'react'


class Livedate extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date().toLocaleDateString()}
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
    //     setInterval(()=>this.setState({date: new Date().toLocaleDateString()}),1000)
    // }

    render(){
        return (
            <div>
                <h5 className="center-align amber-text text-accent-4" style={{fontWeight:'600', paddingBottom:'15px'}}>{this.props.date}</h5>
            </div>
        )
    }

}

export default Livedate