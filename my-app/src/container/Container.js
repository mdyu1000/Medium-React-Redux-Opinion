import React from 'react';
import Component from '../component/Component'

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	currentGP: 0 
    };
    this.handleClickNextGP = this.handleClickNextGP.bind(this)
  }  

  handleClickNextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  render() {
    const src = GUINEAPATHS[this.state.currentGP];
    return (
    	<Component src={src} 
    		onClickNextGP={this.handleClickNextGP}
  		/>
  	) 
  }
}