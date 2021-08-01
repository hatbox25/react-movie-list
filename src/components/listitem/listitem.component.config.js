import PropTypes from 'prop-types';

const displayName = 'ListItem';
const propTypes = {
  item: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
  }),
  onClickImage: PropTypes.func.isRequired,
};
const defaultProps = {
  item: {
    Title: '',
    Year: '',
    Poster: '',
  },
};

export default { displayName, propTypes, defaultProps };
