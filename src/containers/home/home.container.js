import { connect } from 'react-redux';
import Home from './home.component';

import { getMovies, getSuggestion } from '../../redux/actions/movie.action';

const mapStateToProps = (state) => ({
  suggestion: state.movie.suggestion,
  movies: state.movie.data,
  loading: state.movie.loading,
  hasMore: state.movie.hasMore,
});
const mapDispatchToProps = { getMovies, getSuggestion };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
