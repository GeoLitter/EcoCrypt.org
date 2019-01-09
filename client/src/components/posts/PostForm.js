import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      postImage: null,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.uploadHandler = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    
    let formData = new FormData();
    formData.append('postImage', this.state.postImage); 
     

    const newPost = {
      text: this.state.text,
      postImage: this.state.postImage,
      name: user.name,
      avatar: user.avatar
    };


    console.log(newPost);

    return

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  encodeImageFileAsURL(element) {
    var file = element.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
      this.setState({
        postImage: reader.result
      })
    }
    reader.readAsDataURL(file);
  }


  uploadHandler(e){
   this.setState({
      postImage: e.target.files[0]
   });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    let thisPtr = this

    return (
      <div> 
      {/* <!-- New Post Modal Trigger --> */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          New Post 
        </button>
        {/* <!-- New Post Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Report Something</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Form Body */}
                <div className="post-form mb-3">
                    <div className="card card-info">
                      <div className="card-header bg-info text-white">Say Something....</div>
                      <div className="card-body">
                        <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                          <div className="form-group">
                            <TextAreaFieldGroup
                              placeholder="Create a post"
                              name="text"
                              value={this.state.text}
                              onChange={this.onChange}
                              error={errors.text}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                              <input type="file" className="custom-file-input" onChange={thisPtr.encodeImageFileAsURL} />
                              <label className="custom-file-label" >Choose file</label>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-dark">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
