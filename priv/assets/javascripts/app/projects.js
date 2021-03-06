/** @jsx React.DOM */

ProjectsNav = React.createClass({
    getInitialState: function(){
        return { projects: GiddyUp.projects };
    },
    componentWillMount: function(){
        var self = this;
        GiddyUp.fetchProjects(function(projects){
            self.setState({
                projects: projects
            });
        });
    },
    render: function() {
        var self = this;
        var projects = this.state.projects.map(function(project) {
            var key = project.name;
            return <ProjectNavLink key={key} project={project} showing={self.props.showing}/>;
        });
        return (
                <div className="navbar" style={{marginBottom: 0}} >
                  <div className="navbar-inner">
                    <a href="#/" className="brand">GiddyUp</a>
                    <ul className="nav">{projects}</ul>
                  </div>
                </div>
        );
    }
});

ProjectNavLink = React.createClass({
    render: function(){
        var url = '#' + routie.lookup('project', {project_id: this.props.project.name});
        return (<li className={(this.props.showing.project_id ===
                                this.props.project.name) ? "active" : ""}>
                  <a href={url}> {this.props.project.name} </a>
                </li>);
    }
});
