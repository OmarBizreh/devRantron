import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RantCard from './rant_card';
import Loading from '../utilities/loading';
import rantscript from '../../consts/rantscript';
import Comments from '../comments/comments';
import PostComment from '../comments/comment_post';

class Rant extends Component {
  constructor() {
    super();
    this.state = {
      mainWidth: 0,
      rant: null,
    };
  }
  componentWillMount() {
    this.fetchRant();
  }
  fetchRant() {
    const { id, auth } = this.props;
    let authToken = null;
    if (auth.user) {
      authToken = auth.user.authToken;
    }
    rantscript
    .rant(id, authToken)
    .then((res) => {
      const rant = res;
      this.setState({ rant });
    })
    .catch(() => {
    });
  }
  renderSingleColumn() {
    const { rant } = this.state;
    const { theme, vote, auth } = this.props;
    return (
      <div className="rant_compact_column">
        <RantCard
          modal
          item={rant.rant}
          key={rant.rant.id}
          theme={theme}
          vote={vote}
        />
        <Comments comments={rant.comments} theme={theme} vote={vote} />
        <PostComment
          theme={theme}
          auth={auth}
          id={rant.rant.id}
          fetch={() => this.fetchRant()}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="rant_container modal">
        { this.state.rant ? this.renderSingleColumn() : <Loading /> }
      </div>
    );
  }
}

Rant.propTypes = {
  theme: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rant;