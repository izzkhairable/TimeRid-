import React from 'react';

class Eventheader extends React.Component{
    constructor() {
        super();

      }

    componentDidMount() {
        const M= window.M
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {outDuration: 500, inDuration: 500});
          });
    }

    render(){


        return(
            <div>
                <p className="card-title valign-wrapper">{this.props.eventName}<span class={"new badge left-align "+ this.props.badgeColor} data-badge-caption="">{this.props.category}</span></p>  
                <ul className={"collapsible"}>
                    <li>
                    <div className={"collapsible-header"}>
                        <p>Description </p>
                        <i className="material-icons">description</i>
                    </div>
                    <div className={"collapsible-body"}><span>{this.props.eventDesc}</span></div>
                    </li>
                </ul>
            </div>
            )
        }
}

export default Eventheader