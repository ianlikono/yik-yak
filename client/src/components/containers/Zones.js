import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: []
    }
  }

  componentDidMount(){
    console.log("componentDidMount")
    superagent
    .get('http://localhost:4200/api/zone')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response)=>{
      if (err) {
        alert('ERROR: ' + err)
      }
      console.log(JSON.stringify(response.body))
      let results = response.body.message
      this.setState({
        list: results
      })
    })
  }

  submitZone(){
    console.log('clicked' + JSON.stringify(this.state.zone))
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({
      list: updatedList
    })
  }
  // updateName(event){
  //   let updatedZone = Object.assign({}, this.state.zone)
  //   updatedZone['name'] = event.target.value
  //   this.setState({
  //     zone: updatedZone 
  //   })

  // }
  //  updateZipCode(event){
  //   let updatedZone = Object.assign({}, this.state.zone)
  //   updatedZone['zipCode'] = event.target.value
  //   this.setState({
  //     zone: updatedZone 
  //   })
  // }

  // updateComments(event){
  //   let updatedZone = Object.assign({}, this.state.zone)
  //   updatedZone['numComments'] = event.target.value
  //   this.setState({
  //     zone: updatedZone 
  //   })

  // }
  updateZone(event){
    // console.log("Updated Zone "+ event.target.id+"=="+event.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }
 

  render() {

    const listItems = this.state.list.map((zone, i) => {
      return(
        <li key={i}><Zone currentZone={zone} /></li>
      )
    })

    return (
      <div>
        <ol>
          {listItems}
        </ol>
        <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" className="form-control"/><br /> 
        <input id="zipCode" onChange={this.updateZone.bind(this)} type="text" placeholder="Update zipCode" className="form-control"/><br />
        <button className="btn btn-danger" onClick={this.submitZone.bind(this)}>Add Zone </button>
      </div>
    );
  }
}

export default Zones;
