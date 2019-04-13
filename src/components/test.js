import React, { Component } from 'react'
import axios from 'axios';

export default class test extends Component {
  
    editProfile = () => {
            axios ({
                url: 'https://relaonebinar.herokuapp.com/api/organization/profile',
                method: 'put',
                headers: { 
                    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiVGhlIFBvd2VyIG9mIENsYXciLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU0OTUyODU4LCJleHAiOjE1NTU1NTc2NTh9.hjnTlrfcJYsD7EiiGHKvVgxJ7YGi8LNC4iJzXll-ljA'
                },
                data: {
                    'organizationName' : 'The Power of Meong', 
                    'username' : 'mantap', 
                    'email' : 'palsuasli69@gmail.com', 
                    'phoneNumber' : '6281294627222'
                }
            })
                .then(res => console.log(res))                
                .catch(err => console.log(err))
        }

    render() {
     console.log(this.editProfile());
    return (
      <div>
        
      </div>
    )
  }
}
