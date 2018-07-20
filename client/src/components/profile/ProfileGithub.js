import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ProfileGithub extends Component {
  state = {
    clientId: 'c0e8baf8ec61a464a609',
    clientSecret: 'ce66e2df81e2518fad575ab5754a24ec36edcf61',
    count: 5,
    sort: 'created: asc',
    repos: [],
    error: null
  };

  componentDidMount() {
    const {username} = this.props;
    const {count, sort, clientId, clientSecret} = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({repos: data})
        }
      })
      .catch(err => {
        this.setState({error: err.message});
      });
  }

  render() {
    const {repos} = this.state;
    let reposItems;
    const reposLoader = <div>Repositories doesn't found or Github profile doesn't exist</div>;

    reposItems = !repos.message ? repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
                         Watchers: {repo.watchers_count}
                       </span>
            <span className="badge badge-success">
                         Stars: {repo.forks_count}
                       </span>
          </div>
        </div>
      </div>
    )) : reposLoader;

    return (
      <div ref="myRef">
        <hr/>
        <h3 className="mb-4">Latest Github Repos</h3>
        {reposItems}
      </div>
    )
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};


export default ProfileGithub;