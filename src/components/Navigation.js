import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  };

  render(){
    return(
			<nav className="navbar navbar-default">

				<div className="container-fluid">

				    <div className="navbar-header">
				    	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
				      	<a id="title" className="navbar-brand" href="#/">TuVēDa</a>
				    </div>

            {/* TODO: navbar links work */}
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#/Team">Our Team</a></li>
				        <li><a href="#/Project">Our Projects</a></li>
				        {/* <li><a href="#/Contact">Contact Us</a></li> */}
				      </ul>
				    </div>

				</div>

			</nav>
    )
  };
}

export default Navigation;
