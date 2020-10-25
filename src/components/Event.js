import React from 'react';
import Eventheader from './Eventheader'
import Eventtiming from './Eventtiming'
import Editdeleteevent from './Editdeleteevent'

class Event extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.deleteTiming= this.deleteTiming.bind(this);
        this.state={
          timings:this.props.timings
        }  
      }

      handleClick(){
        const retrievedObject = JSON.parse(localStorage.getItem('eventsData'));
        const timingLength=retrievedObject[this.props.eventId-1].timings.length
        retrievedObject[this.props.eventId-1].timings.push({id: timingLength+1,date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()})
        localStorage.setItem('eventsData', JSON.stringify(retrievedObject));
        this.setState({timings:retrievedObject[this.props.eventId-1].timings })
      }

 
      deleteTiming(id,eventId){
        const retrievedObject = JSON.parse(localStorage.getItem('eventsData'));
        retrievedObject[eventId-1].timings.splice(id-1,1)
        localStorage.setItem('eventsData', JSON.stringify(retrievedObject));
        this.setState({timings:retrievedObject[eventId-1].timings })
      }



    render(){
      const datajson=this.state.timings.map(
        function(fakedata){
                            return(
                                <Eventtiming 
                                date={fakedata.date}
                                time={fakedata.time}
                                id={fakedata.id}
                                deleteTiming={this.deleteTiming}
                                eventId={this.props.eventId}
                                key={fakedata.id}
                                />
                            )
                     } 
                ,this)
        return(
            <div className="col s12 m6 mb-4">

            
              <div className="card">
                <div className="card-content ">
                  <Eventheader 
                  
                  badgeColor={this.props.categoryColor}
                  eventName={this.props.eventName} 
                  eventDesc={this.props.eventDesc} 
                  category={this.props.category}
                  />
                
                  <p>Recorded Timings</p>
                  <ul class="collection">
                    {datajson}
                  </ul>

                </div>
                <div class="card-action">
                    <div className="right-align">
                     
                      <a class="waves-effect waves-light btn" onClick={this.handleClick} style={{marginLeft:'10px'}}>
                        <i className="material-icons left-align">add</i>
                        <i className="material-icons left-align" >access_time</i>
                      </a> 
                    </div>
                </div>
              </div>
            </div>

           
          )
    }
}


export default Event