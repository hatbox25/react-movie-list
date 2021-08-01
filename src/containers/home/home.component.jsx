import React from 'react';
import { Layout, Typography } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

import { Searchbar, List } from '../../components';

import config from './home.component.config';

const { Content } = Layout;
const { Title } = Typography;

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      page: 1,
    };
  }

  onKeywordChange = (keyword) => {
    this.setState({ keyword });
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.props.getMovies(this.state.keyword, this.state.page);
      },
    );
  };

  render() {
    return (
      <Layout>
        <Content style={{ width: 800 }}>
          <Title>Stockbit React - Movie List</Title>

          <Searchbar
            suggestion={this.props.suggestion}
            getMovies={this.props.getMovies}
            getSuggestion={this.props.getSuggestion}
            onChange={this.onKeywordChange}
          />

          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={!this.props.loading && this.props.hasMore}
          >
            <List dataSource={this.props.movies} loading={this.props.loading} />
          </InfiniteScroll>
        </Content>
      </Layout>
    );
  }
}

HomePage.displayName = config.displayName;
HomePage.defaultProps = config.defaultProps;
HomePage.propTypes = config.propTypes;

export default HomePage;
