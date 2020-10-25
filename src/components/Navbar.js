import React from 'react'

function Navbar(){
    return(
        <div className="navbar-fixed">
            <nav className="deep-orange accent-4" style={{minHeight:'80px'}}>
                <div className={"nav-wrapper"}>
                    <div className={'row'}>
                        <div className={'col s12'}>
                            <a href="#" className={"brand-logo center"}>TimeRid<i className={'material-icons right'} style={{fontSize:'50px', marginLeft: '0'}}>av_timer</i></a>
                        </div> 
                    </div> 
                    <div className={'row'} style={{marginTop:'40px'}}>
                        <div className={'col s12'}>
                                <h6 className={'center'}>Get rid of bad habits, lateness and procrastination</h6>
                        </div>
                    </div>
                </div>
            </nav>
      </div>
    )
}

export default Navbar