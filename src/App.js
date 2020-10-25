import React from 'react'
import Navbar from './components/Navbar'
import Event from './components/Event'
import Livedatetime from './components/Livedatetime'
import Addevent from './components/Addevent'
import { render } from '@testing-library/react'
import { extend } from 'jquery'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            
        }
    }


    render(){
        const data=JSON.parse(localStorage.getItem('eventsData'))
        const datajson= data.map(
            function(fakedata){
                                return(
                                    <Event eventName={fakedata.eventName} 
                                        eventDesc={fakedata.eventDesc} 
                                        category={fakedata.category} 
                                        categoryColor={fakedata.categoryColor}
                                        timings={fakedata.timings}
                                        eventId ={fakedata.id}
                                        key={fakedata.id}
                                    />
                                )
                        } 
                    )

        return(
            <div>
                <Navbar/>
                
                <div className="container">
                <Livedatetime/>
                <div className="row ">
                   
                        {datajson}
                
                </div>
                </div>
                <Addevent/>
            </div>
        )
    }
}
export default App