import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { editUserPhoto } from '../actions/memberActions';

class UserUpdatePhoto extends Component {

  state = {
    file: null
  }

  onChange = (e) => {
    let file = e.target.files[0]
    this.setState({
        file: file
    })
  }

  handleUpload = (e) => {
    e.preventDefault();
    if (this.state.file === null) {
      alert("Please choose your photo before uploading")
    } else {

      let file = this.state.file

      let formdata = new FormData()
      formdata.append('photo', file)
      console.log(formdata)
      this.props.editPhoto(formdata)
    }
    }

  render() {
    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Organization Photo</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="examplePhoto">Select Organization Photo</Label>
                <Input onChange={(e) => this.onChange(e)} type="file" name="photo" accept="image/*" id="examplePhoto"/>
                <FormText color="muted">
                  The photo file must be in .jpg or .jpeg format.
                </FormText>
            </FormGroup>

            <Button color="primary" onClick={(e) => this.handleUpload(e)}>Upload</Button>
        </Form>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    editPhoto: (formdata) => { dispatch(editUserPhoto(formdata))}
  }
}

export default connect(null, mapDispatchToProps)(UserUpdatePhoto);



