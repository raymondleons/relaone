import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/_style.scss';
import { getSkillset } from '../actions/organizationActions';
import { FormGroup, Label } from 'reactstrap';


class Skillset extends Component {

    state = {
        checked: false
    }   

    handleCheck = (e) => {
        this.setState({
            checked: !this.state.checked
        })
        console.log(e.target.value)
    }

    componentDidMount(){
        this.props.getSkillset();
    }
    
    

  render() {
      console.log(this.state)

    

    const skillsets = this.props.skillsets
    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div><label><input onChange={this.handleCheck} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>Loading skill-set list</div>
    );

    return (
      <div>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        skillsets: state.skillset.skillsets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSkillset: () => { dispatch(getSkillset())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skillset);


