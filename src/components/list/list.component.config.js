import PropTypes from 'prop-types';

const displayName = 'List';
const propTypes = {
  dataSource: PropTypes.array,
  loading: PropTypes.bool,
};
const defaultProps = {
  dataSource: [],
  loading: false,
};

export default { displayName, propTypes, defaultProps };
