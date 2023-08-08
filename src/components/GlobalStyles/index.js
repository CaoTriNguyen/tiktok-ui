import PropTypes from 'prop-types';
import React from 'react';
import '~/components/GlobalStyles/GlobalStyles.scss';

function GlobalStyles({ children }) {
    return React.Children.only(children);
}
GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
