import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn } from '../actions/auth';

const mapStateToProps = state => ({
  error: state.session.error
});

const mapDispatchToProps = dispatch => ({
  logIn: (credentials, cb) => {
    dispatch(logIn(credentials, cb));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);