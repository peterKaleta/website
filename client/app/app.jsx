
'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');
var _ = require('lodash');

var Svg = require('react-svg');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

var Wrapper = React.createClass({

    skillGroups: {
      'Frontend & JS': ['Isomorphic apps', 'React', 'Backbone', 'Polymer', 'Node', 'css3', 'html5', 'sass', 'less', 'Responsive'],
      'User Experience': ['Rapid prototyping','UCD', 'Metric based UX'],
      'workflow & tests' : ['gulp', 'grunt', 'docker', 'bower', 'Git', 'Browserify', 'TDD', 'BDD', 'Jasmine', 'Sinon', 'Phantom'],
      'Data' : [ 'rest api', 'postgre', 'mongo']
    },

    renderSkills: function (skills) {
      return _.map(skills, function (skill, index) {
        return (
          <li key={index}>
            <span>{skill}</span>
          </li>
        );
      });
    },

    renderSkillGroups: function () {
        var self = this;
        var skillGroups = _.map( _.keys(this.skillGroups), function(name, index){
          var skills = self.renderSkills(self.skillGroups[name]);
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
                    <p>I enjoy building web apps using edge technology stacks and metric based User Experience.</p>
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
