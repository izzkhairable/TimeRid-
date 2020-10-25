import React from 'react'

class Addevent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            eventName:'',
            eventDesc: '',
            category: '',
            categoryColor: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        const M= window.M
        const options ={}
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances1 = M.FloatingActionButton.init(elems, options);

            var elems2 = document.querySelectorAll('.modal');
            var instances2 = M.Modal.init(elems2, options);

            var elems3 = document.querySelectorAll('select');
            var instances3 = M.FormSelect.init(elems3, options);
          });
    }

    handleChange(event) {
        const name=event.target.name
        this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {

        const retrievedObject = JSON.parse(localStorage.getItem('eventsData'));
        const newEvent={
            id: retrievedObject.length+1,
            eventName:this.state.eventName,
            eventDesc:this.state.eventDesc,
            category:this.state.category,
            categoryColor:this.state.categoryColor,
            timings:[]
        }
        retrievedObject.push(newEvent)
        localStorage.setItem('eventsData', JSON.stringify(retrievedObject));
      }
    

    render(){
        return(
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large blue accent-4 waves-effect waves-light modal-trigger" href="#modal1">
                    <i className="large material-icons">add</i>
                </a>

                <div id="modal1" className="modal modal-fixed-footer">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="modal-content">
                            <h4>Add New Event</h4>
                            <div className="row">
                                
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">event</i>
                                            <input name="eventName" id="icon_prefix" type="text" className="validate" value={this.state.eventName} onChange={this.handleChange}/>
                                            <label for="icon_prefix">Event Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">description</i>
                                            <textarea name="eventDesc" id="textarea1" className="materialize-textarea" value={this.state.eventDesc} onChange={this.handleChange}></textarea>
                                            <label for="textarea1">Description</label>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom:'25px'}}>
                                        <div className="input-field col s12 l6">
                                            <i className="material-icons prefix">filter_list</i>
                                            <input name="category" id="icon_prefix2" type="text" className="validate" value={this.state.category} onChange={this.handleChange}/>
                                            <label for="icon_prefix2">Category</label>
                                        </div>

                                        <div className="input-field col s12 l6">
                                                
                                                <label for="icon_prefix">Category Color
                                                    <select name="categoryColor" className={"icons browser-default "+ this.state.categoryColor} value={this.state.categoryColor} onChange={this.handleChange}>
                                                        <option value="" disabled selected>Choose your option</option>
                                                        <option className="red accent-4 white-text" value="red accent-4" >Red</option>
                                                        <option className="pink accent-4 white-text" value="pink accent-4" >Pink</option>
                                                        <option className="purple accent-4 white-text" value="purple accent-4" >Purple</option>
                                                        <option className="deep-purple accent-4 white-text" value="deep-purple accent-4" >Deep purple</option>
                                                        <option className="indigo accent-4 white-text" value="indigo accent-4" >Indigo</option>
                                                        <option className="blue accent-4 white-text" value="blue accent-4" >Blue</option>
                                                        <option className="light-blue accent-4 white-text" value="light-blue accent-4" >Light-blue</option>
                                                        <option className="cyan accent-4 white-text" value="cyan accent-4" >Cyan</option>
                                                        <option className="teal accent-4 white-text" value="teal accent-4" >Teal</option>
                                                        <option className="green accent-4 white-text" value="green accent-4" >Green</option>
                                                        <option className="light-green accent-4 white-text" value="light-green accent-4" >Light green</option>
                                                        <option className="lime accent-4 white-text" value="lime accent-4" >Lime</option>
                                                        <option className="yellow accent-4 white-text" value="yellow accent-4" >Yellow</option>
                                                        <option className="amber accent-4 white-text" value="amber accent-4" >Amber</option>
                                                        <option className="orange accent-4 white-text" value="orange accent-4" >Orange</option>
                                                        <option className="deep-orange accent-4 white-text" value="deep-orange accent-4" >Deep orange</option>
                                                    </select>
                                                </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        {/* <h5>The event name {this.state.eventName}</h5>
                        <h5>The event desc {this.state.eventDesc}</h5>
                        <h5>The category {this.state.category}</h5>
                        <h5>The category color {this.state.categoryColor}</h5> */}
                        <div className="modal-footer">
                            <a class="btn-floating btn-small waves-effect waves-light red modal-close">X</a>
                            <button style={{marginLeft:'10px'}} href="#!" className=" waves-effect waves-green btn">Add Event</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Addevent