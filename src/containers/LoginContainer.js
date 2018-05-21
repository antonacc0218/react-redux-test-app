import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn } from '../actions/auth';

const mapStateToProps = state => ({
  error: state.session.error
});

const mapDispatchToProps = dispatch => ({
  logIn: (credentials, cb, cbErr) => {
    dispatch(logIn(credentials, cb, cbErr));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);