import React from 'react';

export default class Component extends React.Component {
	constructor(props){
		super(props)
    this.handleClickNextGP = this.handleClickNextGP.bind(this)		
	}

	handleClickNextGP() {
		this.props.setNextPG()
	}

  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
        <button type="button" onClick={this.handleClickNextGP}>
        	NextGP
      	</button>
      </div>
    );
  }
}