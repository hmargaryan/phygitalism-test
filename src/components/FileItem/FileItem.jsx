import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import styles from './FileItem.module.scss';

const FileItem = ({ name, type, time }) => {
  const nameClass = classNames(
    styles.name,
    type ? styles.fileIcon : styles.folderIcon
  );

  return (
    <li className={styles.file}>
      <span className={nameClass}>{`${name}${type}`}</span>
      <span className={styles.time}>
        {moment(time).format('HH:MM:SS YYYY-MM-DD')}
      </span>
    </li>
  );
};

FileItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  time: PropTypes.string.isRequired,
};

FileItem.defaultProps = {
  type: '',
};

export default FileItem;
