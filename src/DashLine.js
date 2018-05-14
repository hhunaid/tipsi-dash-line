import React, { Component } from 'react'
import { View, requireNativeComponent, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types';

export default class DashLine extends Component {
  static propTypes = {
    ...ViewPropTypes,
    dashColor: PropTypes.string,
    dashLineWidth: PropTypes.number,
    dashLineSpace: PropTypes.number,
  }

  render() {
    return (
      <DashLineComponent {...this.props} />
    )
  }
}

const DashLineComponent = requireNativeComponent('DashLineComponent', DashLine)
