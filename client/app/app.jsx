
'use strict';

let React = require('react');
let Bootstrap = require('react-bootstrap');
let _ = require('lodash');
let Svg = require('react-svg');
let Grid = Bootstrap.Grid;
let Row = Bootstrap.Row;
let Col = Bootstrap.Col;

let Wrapper = React.createClass({

    skillGroups: {
      'Frontend & JS': ['ES6', 'Isomorphic apps', 'React', 'Backbone', 'Polymer', 'Node', 'css3', 'html5', 'sass', 'less', 'Responsive'],
      'User Experience': ['Rapid prototyping','UCD', 'Metric based UX'],
      'workflow & tests' : ['gulp', 'grunt', 'docker', 'bower', 'Git', 'Browserify', 'TDD', 'BDD', 'Jasmine', 'Sinon', 'Phantom'],
      'Data' : [ 'rest api', 'postgre', 'mongo']
    },

    renderSkills: function (skills) {
      return _.map(skills, (skill, index) => {
        return (
          <li key={index}>
            <span>{skill}</span>
          </li>
        );
      });
    },

    renderSkillGroups: function () {
        let skillGroups = _.map( _.keys(this.skillGroups), (name, index) => {
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
    },

    render: function() {
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
                            <li><span className="text-warning">#digitalnomad</span></li>
                          </ul>
                        </h4>
                      </hgroup>
                  </header>
                  <div className="text-dimmed what-i-do">
                    <p>I develop web apps with edge technology stacks and metric based User Experience.</p>
                    <p>You can find me on <a>LinkedIn</a>, <a>Twitter</a> or contact me directly at <a>mail@peterkaleta.com</a></p>

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
});

React.render(
    <Wrapper />,
    document.getElementById('wrapper')
);
