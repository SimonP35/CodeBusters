// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './loader.scss';

// == Composant
const Loader = ({ loading }) => (
  <>
    { loading
      && (
      <span className="loader"><span className="loader-inner" /></span>
      )}
  </>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
// == Export
export default Loader;
