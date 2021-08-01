import PropTypes from 'prop-types';

const displayName = 'Searchbar';
const propTypes = {
  suggestion: PropTypes.array,
  getMovies: PropTypes.func.isRequired,
  getSuggestion: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
const defaultProps = {
  suggestion: [],
};

export default { displayName, propTypes, defaultProps };
