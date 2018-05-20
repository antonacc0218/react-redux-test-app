import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getUserData } from '../actions/user';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { user, userId } = this.props;
    if (!user || user.userId !== userId)
      this.props.dispatch(getUserData(userId));
  }

  render() {
    return <Profile user={this.props.user} error={this.props.error} />;
  }
}

const mapStateToProps = state => ({
  userId: state.session.userId,
  user: state.user.data,
  error: state.user.error
});

export default connect(mapStateToProps)(ProfileContainer);
