import React from 'react'
import fakedata from '../fakedata';

class Eventtiming extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        
      }

      handleClick(){
        this.props.deleteTiming(this.props.id, this.props.eventId);
    }

 
      render(){

          return(
                    <li class="collection-item">
                        <div className="flexmain">
                            <div className="flex">
                                <i className="material-icons">date_range</i>
                                <span>{this.props.date}</span>
                            </div>
                            <div className="flex">
                                <i className="material-icons">access_time</i>
                                <span>{this.props.time}</span>
                            </div>
                            <a class="btn-floating btn-small waves-effect waves-light red" onClick={this.handleClick.bind(this)} id={this.props.id}><i class="material-icons">delete</i></a>
                        </div>
                    </li>
          )
      }

}

export default Eventtiming