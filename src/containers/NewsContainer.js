import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';
import { fetchNewsIfNeeded } from '../actions/news';

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNewsIfNeeded());
  }

  render() {
    const { data, error, isFetching } = this.props;
    return <News data={data} error={error} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => ({
  data: state.news.items,
  error: state.news.error,
  isFetching: state.news.isFetching
});

export default connect(mapStateToProps)(NewsContainer);