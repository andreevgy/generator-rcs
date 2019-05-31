import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './<%= name%>.module.scss';

class <%= name%> extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
      </div>
    );
  }
}

<%= name%>.propTypes = {
};

export default <%= name%>;