'use strict';

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Svg from 'react-svg';
import _ from 'lodash';
import '../assets/styles/sass/styles.scss';
import '../bower_components/bootswatch-dist/css/bootstrap.min.css';

class Wrapper extends React.Component {

    skillGroups = {
      'Frontend & JS': ['ES7', 'ES6', 'Isomorphic apps', 'React', 'Backbone', 'Polymer', 'Node', 'css3', 'html5', 'sass', 'less', 'Responsive'],
      'User Experience': ['Rapid prototyping', 'UCD', 'Metric based UX'],
      'workflow & tests': ['gulp', 'grunt', 'docker', 'bower', 'Git', 'Browserify', 'Webpack', 'TDD', 'BDD', 'Jasmine', 'Sinon', 'Phantom'],
      'Data': [ 'rest api', 'postgre', 'mongo']
    }

    renderSkills(skills) {
      return _.map(skills, (skill, index) => {
        return (
          <li key={index}>
            <span>{skill}</span>
          </li>
        );
      });
    }

    renderSkillGroups() {
        let skillGroups = _.map(_.keys(this.skillGroups), (name, index) => {
          let skills = this.renderSkills(this.skillGroups[name]);
          return (
            <li key={index}>
              <span>{name}</span>
              <ul>{skills}</ul>
            </li>);
        });

        return (
          <ul>
            {skillGroups}
          </ul>);
    }

    render() {
        return (
          <div className="wrapper">
            <header className="hero">
              <div className="stamp-wrapper">
                <Svg
                  path="images/stamp.svg"
                  className="stamp"/>
              </div>
            </header>
            <Grid className="main">
              <Row>
                <Col md={7}>
                  <header className="intro">
                      <hgroup>
                        <h2>Peter Kaleta</h2>
                        <h4 className="text-dimmed">
                          <ul className="who-am-i">
                            <li><span className="text-warning">JavaScript</span> developer</li>
                            <li><span className="text-warning">UX</span> prototyper</li>
                            <li><span className="text-warning">traveler</span></li>
                          </ul>
                        </h4>
                      </hgroup>
                  </header>
                  <div className="text-dimmed what-i-do">
                    <p>I develop web apps with edge technology stacks and metric based User Experience.</p>
                    <p>You can find me on <a href="http://www.linkedin.com/in/peterkaleta" target="_blank">LinkedIn</a>, <a href="http://twitter.com/peterkaleta" target="_blank">Twitter</a> or contact me directly at <a href="mailto:mail@peterkaleta.com">mail@peterkaleta.com</a></p>
                    <p>Check out <a href="http://www.nomadpins.com" target="_blank">Nomad Pins</a> my blog where I share awesome places to live and work from.</p>
                   </div>
                </Col>
                <Col md={5}>
                  <div className="my-skills">
                    <h4>My Skills</h4>
                    { this.renderSkillGroups() }
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        );
    }
}

React.render(
    <Wrapper />,
    document.getElementById('wrapper')
);
