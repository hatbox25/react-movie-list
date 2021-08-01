import PropTypes from 'prop-types';

const displayName = 'Home';
const propTypes = {
  suggestion: PropTypes.array,
  movies: PropTypes.array,
  loading: PropTypes.bool,
  hasMore: PropTypes.bool,
  getMovies: PropTypes.func,
  getSuggestion: PropTypes.func,
};
const defaultProps = {
  suggestion: [],
  movies: [],
  loading: false,
  hasMore: false,
};

export default { displayName, propTypes, defaultProps };
