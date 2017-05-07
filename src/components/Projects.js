import React, { Component } from 'react';

class Projects extends Component {

  render(){
    return (
      <div id="projectRow">
        <h1 className="row sectionTitle">Our Projects</h1>

        <div className="row" >
          {/* Veev's site */}
          <div className="col-sm-12 col-md-12 projectBox">
            <div className="row">
              <div className="col-sm-8 col-lg-offset-1 col-lg-5">
                <a target="_blank" href="https://sproutpatterns.com/">
                  <img src="img/sproutPatterns.png" className="screenShot" id="colorPicker"/>
                </a>
              </div>
              <div className="col-sm-4 col-lg-5 projectInfo">
                <h4 className="projectTitle">Sprout Patterns</h4>
                <p className="projectBlurb">
                  A sister company of Spoonflower, Sprout Patterns provides
                  users with the unique experience of designing a piece of
                  clothing online. Our backend engineer contructed a color picker
                  for the site using a powerful combination of image analysis tools.
                </p>

                <h5 className="projectSubTitle">Technologies Used</h5>
                <ul className="technologies">
                  <li>Ruby on Rails</li>
                  <li>jQuery</li>
                  <li>Three.js</li>
                  <li>Image Magick</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TODO: update color picker photo */}
          {/* Turner's Color Picker */}
          <div className="col-sm-12 col-md-12 projectBox">
            <div className="row">
              <div className="col-sm-4 col-lg-offset-1 col-lg-5 projectInfo">
                <h4 className="projectTitle">Professional Portfolio</h4>
                <p className="projectBlurb">
                  Built for a young full stack developer, this professional
                  portfolio gives a memorable impression with a vibrant design
                  and intuitive layout. It was part of a multi-step process to
                  create a digital footprint for an up-and-coming software engineer.
                </p>

                <h5 className="projectSubTitle">Technologies Used</h5>
                <ul className="technologies">
                  <li>Materialize</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>jQuery</li>
                </ul>
              </div>

              <div className="col-sm-8 col-lg-5">
                <a target="_blank" href="https://contygm.github.io/">
                  <img src="img/veevSite.png" className="screenShot" id="veevSite"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
