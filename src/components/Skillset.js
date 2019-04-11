import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/_style.scss';
import { getSkillset } from '../actions/organizationActions';
import { FormGroup, Label } from 'reactstrap';


class Skillset extends Component {

    state = {
        selected : [],
        skillsets : [
            {
                id : 1,
                name : 'Medic',
                status : false
            },
            {
                id : 2,
                name : 'Medic',
                status : false
            },
            {
                id : 3,
                name : 'Medic',
                status : false
            },
            {
                id : 4,
                name : 'Medic',
                status : false
            }
        ]
    }   


    handleCheck = (e) => {
        const id = (e.target.value)
        const skillsetss = this.state.skillsets
        const skill = skillsetss.filter(skills => skills.id == id)
        skill[0].status=!(skill[0].status)
        if (skill[0].status == true) {
            this.setState({
                selected: [...this.state.selected, skill[0].id]
            });
        } else {
            this.setState({
                selected: this.state.selected.filter(x => x !== skill[0].id)
            })
        }
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


    const displaySkillsetHC = this.state.skillsets.length ? (
        this.state.skillsets.map(skillset => {
          return (
              <div><label><input onChange={this.handleCheck} type="checkbox" name="skillSet" key={skillset.id} value={skillset.id}/> {skillset.name}</label><br></br></div>
          )
        })
      ) : (
          <div>Loading skill-set list</div>
      );

    return (
      <div>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillsetHC}
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


