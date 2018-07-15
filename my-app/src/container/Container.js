import React from 'react';
import { connect } from 'react-redux'
import {
  setNextPG,
  fetchAllPG
} from '../action/guineaPigAction'
import Component from '../component/Component'

class Container extends React.Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.fetchAllPG()
	}

	render(){
		return (
			<Component 
				src={this.props.src}
				setNextPG={this.props.setNextPG}
			/>
		)
	}
}

const mapStateToProps = state => ({
  ...state,
  src: state.guineaPigReducer.GUINEAPATHS[state.guineaPigReducer.index]
})

const mapDispatchToProps = dispatch => ({
  setNextPG: () => dispatch(setNextPG()),
  fetchAllPG: () => dispatch(fetchAllPG())
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);