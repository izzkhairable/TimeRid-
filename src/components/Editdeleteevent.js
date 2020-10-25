import React, {Component} from 'react'

class Editdeleteevent extends Component{
    constructor(props){
        super(props)

        this.state = {
            eventName:props.eventName,
            eventDesc: props.eventDesc,
            category: props.category,
            categoryColor: props.categoryColor,
            eventId: props.eventId
        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        const name=event.target.name
        this.setState({[name]: event.target.value});
    }
      
    render(){
        return(
            <div className="fixed-action-btn">

                <div id="modal2" className="modal modal-fixed-footer">
                    <form className="col s12 m6" onSubmit={this.handleSubmit}>
                        <div className="modal-content">
                            <h4>Edit Event</h4>
                            <div className="row">
                                
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">event</i>
                                            <input name="eventName" id="icon_prefix" type="text" className="validate" value={this.props.eventName} onChange={this.handleChange}/>
                                            <label for="icon_prefix">Event Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">description</i>
                                            <textarea name="eventDesc" id="textarea1" className="materialize-textarea" value={this.props.eventDesc} onChange={this.handleChange}></textarea>
                                            <label for="textarea1">Description</label>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom:'25px'}}>
                                        <div className="input-field col s12 l6">
                                            <i className="material-icons prefix">filter_list</i>
                                            <input name="category" id="icon_prefix2" type="text" className="validate" value={this.props.category} onChange={this.handleChange}/>
                                            <label for="icon_prefix2">Category</label>
                                        </div>

                                        <div className="input-field col s12 l6">
                                                
                                                <label for="icon_prefix">Category Color
                                                    <select name="categoryColor" className={"icons browser-default "+ this.state.categoryColor} value={this.state.categoryColor} onChange={this.handleChange}>
                                                        <option value="" disabled>Choose your option</option>
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
                            
                            <h5>The event name {this.state.eventName}</h5>
                            <h5>The event desc {this.state.eventDesc}</h5>
                            <h5>The category {this.state.category}</h5>
                            <h5>The category color {this.state.categoryColor}</h5>
                            <h5>The event id {this.state.eventId}</h5>
                        </div>
                     
                        <div className="modal-footer">
                            <a class="btn-floating btn-small waves-effect waves-light red modal-close">X</a>
                            <button style={{marginLeft:'10px'}} href="#!" className=" waves-effect waves-green btn">Delete Event</button>
                            <button style={{marginLeft:'10px'}} href="#!" className=" waves-effect waves-green btn">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

}

export default Editdeleteevent