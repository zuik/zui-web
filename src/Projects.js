import React, { Component } from 'react';
import './Projects.css';
class Projects extends Component {
  render() {
    return (<div>
      <h2>Projects</h2>
      <ProjectCard projectName="AwesomeProject 1" 
      projectDesc="This is a long description about the project, but if you really want to know more please click the project name"
      /></div>
    );
  }
}

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <h3>{this.props.projectName}</h3>
        <p>{this.props.projectDesc}</p>
      </div>
    )
  };
}
export default Projects;
