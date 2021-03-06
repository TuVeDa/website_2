import React, { Component } from 'react';


class Team extends Component {
  render() {
    return (
      <div id="teamRow">
				<h1 className="sectionTitle row" >Our Team</h1>

				<div className="row" id="profileRow">
					<div className="col-sm-12 col-md-4 profileBox">
						<img src="img/tDavis1.jpg" className="profilePic" id="turner"/>
						<h4 className="teammate">Turner</h4>
						<h5 className="subheading">Web Developer</h5>
						<p className="teammateBlurb">
              As TuVeDa’s back end engineer, Turner creates efficient
              systems and stable functionality with advanced technologies
              like Ruby on Rails, SQL and Javascript frameworks.
            </p>
					</div>

					<div className="col-sm-12 col-md-4 profileBox">
						<img src="img/veev.jpg" className="profilePic" id="veev"/>
						<h4 className="teammate">Veev</h4>
						<h5 className="subheading">Web Developer</h5>
						<p className="teammateBlurb">
              As TuVeDa’s web designer and front end developer,
              Veev creates elegant and engaging UI/UX with cutting
              edge tools like React, Bootstrap and CSS frameworks.
            </p>
					</div>

					<div className="col-md-4 col-sm-12 profileBox">
						<img src="img/david.jpg" className="profilePic" id="david"/>
						<h4 className="teammate">David</h4>
						<h5 className="subheading">SEO Specialist</h5>
						<p className="teammateBlurb">
              As TuVeDa’s SEO and marketing specialist, David maximizes
              your web application’s traffic with customized strategies
              tailored to your audience and business goals.
            </p>
					</div>
				</div>

			</div>
    );
  }
}

export default Team;
