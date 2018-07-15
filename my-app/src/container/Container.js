import React from 'react';
import { connect } from 'react-redux'
import {
  setNextPG
} from '../action/guineaPigAction'
import Component from '../component/Component'

const mapStateToProps = state => ({
  ...state,
  src: state.guineaPigReducer.GUINEAPATHS[state.guineaPigReducer.index]
})

const mapDispatchToProps = dispatch => ({
  setNextPG: () => dispatch(setNextPG())
})

export default connect(mapStateToProps, mapDispatchToProps)(Component);