import React, { Component } from 'react';
import styles from './styles'

class Comment extends Component {


  render() {

    return (
      <div>
        <p style={{fontSize:18, fontWeight:500}}>
          {this.props.currentComment.body}
        </p>

        <span style={{fontWeight:200}}>{this.props.currentComment.username}</span>
        <span style={{marginLeft:12, marginRight:12, fontWeight: 200}}> | </span>
        <span style={{fontWeight:200}}>{this.props.currentComment.timestamp}</span>

        <hr />
      </div>
    );
  }
}


export default Comment;
