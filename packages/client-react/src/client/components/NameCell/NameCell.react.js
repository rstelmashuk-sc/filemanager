import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NameCell.less';
import Svg from '@opuscapita/react-svg/lib/SVG';
import LoadingCell from '../LoadingCell';

const propTypes = {
  getIcon: PropTypes.func,
  cellProps: PropTypes.object,
  loading: PropTypes.bool,
}

const NameCell = (props) => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    props.getIcon(props.cellProps.rowData).then((res) => { setImg(res) });
  }, [])
  if (props.loading) {
    return (<LoadingCell />);
  }

  return (
    <div className="oc-fm--name-cell">
      <div className="oc-fm--name-cell__icon">
        <Svg
          className="oc-fm--name-cell__icon-image"
          svg={img && img.svg}
          style={img && { fill: img.fill }}
        />
      </div>
      <div
        className="oc-fm--name-cell__title"
        title={props.cellProps.cellData || ''}
      >
        {props.cellProps.cellData || ''}
      </div>
    </div>
  );
};

export default ({ loading, getIcon }) => (cellProps) => {
  return (
    <NameCell
      loading={loading}
      getIcon={getIcon}
      cellProps={cellProps}
    >
    </NameCell>)
}

NameCell.propTypes = propTypes;
