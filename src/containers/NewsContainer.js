import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';
import { fetchNewsIfNeeded } from '../actions/news';

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNewsIfNeeded());
  }

  render() {
    const { data, error } = this.props;
    return <News data={data} error={error} />;
  }
}

const mapStateToProps = state => ({
  data: state.news.items,
  error: state.news.error
});

export default connect(mapStateToProps)(NewsContainer);