import React, {Component} from 'react';
import { connect } from 'react-redux' 

export default ChildComponent=> {
  class ComposedComponent extends Component{
  // before the component gets rendered
  componentDidMount(){
    this.shouldNavigateAway()
  }
//  when the component receives new prop 
  componentDidUpdate(){
    this.shouldNavigateAway()
  }

  shouldNavigateAway = ()=>{
    if(!this.props.auth){
      this.props.history.push('/')
    }
  }

  render(){
    return( <ChildComponent {...this.props} /> )
  }

}    

function mapStateToProps(state) {
  return { auth : state.auth}
}

return connect(mapStateToProps)(ComposedComponent)


} 