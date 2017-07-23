import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'; //able to have access to all action creators with this line and available on this.props.'whatever action'

class CommentBox extends Component {
    
    constructor(props) {
        super(props);

        this.state = {comment: ''};
    }
    
    handleChange(event) {   
        this.setState({comment: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment); //action creator saveComment, passing in the state
        this.setState({comment: ''});
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h4>Add a comment</h4>
                <textarea 
                value = {this.state.comment}
                onChange={this.handleChange.bind(this)}/>
                <div>
                    <button action="submit">Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);