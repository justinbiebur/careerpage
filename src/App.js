import React from 'react';
import './App.css';
import Main from './main';

function Comp2(props) {
  return (
    <div className="container">
      <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Fill in your details and answer the following.</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputName" className="form-control" placeholder="Full Name" required autofocus/>
                <label for="inputName">Name</label>
              </div>

              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required/>
                <label for="inputEmail">Email</label>
              </div>

              <div className="form-label-group">
                <input type="text" id="inputExpert" className="form-control" placeholder="Expert in (Mention any one skill eg. Machine Learning)" required/>
                <label for="inputExpert">Expert in (Mention one skill )</label>
              </div>

              

              <div className="form-label-group">
                <input type="text" id="inputWord" className="form-control" placeholder="Describe yourself in one word" required/>
                <label for="inputWord">Describe yourself in one word</label>
              </div>

              <div className="form-label-group">
                <input type="text" id="inputSmart" className="form-control" placeholder="Are you smart?" required/>
                <label for="inputSmart">Can you work in a team?</label>
              </div>



              
              
              <hr className="my-4"/>
              <div className="form-label-group">
                <input type="text" id="inputDuration" className="form-control" placeholder="Are you available for atleast a duration of one month?" required/>
                <label for="inputDuration">Available for atleast a month?</label>
              </div>
              <button onClick={()=>props.handle('Comp3')} className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">Set up an interview for me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

class App extends React.Component{

  
  constructor(){
    super();
    this.state={
      page:'Comp1',
    }
    this.fun=this.fun.bind(this);
  }
fun(p){
  this.setState((state, props) => {
    return {page: p};
  })
}
render(){
  if (this.state.page==='Comp1'){
  return( <Main handle={this.fun}></Main>);
}

else if (this.state.page==='Comp2') {
  return(<Comp2 handle={this.fun}></Comp2>);
}

else {
  return(

    <div className="jumbotron text-center">
      <h1 className="display-3">Thank You!</h1>
      <p className="lead"><strong>Please wait for an email confirmation.</strong> We will let you know about the details of the interview.</p>
      <hr/>
      <p>
        Apply for internship <a href="" onClick={()=>this.fun('Comp2')}>Fill the form</a>
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-sm" href="https://neurasoft.ml" role="button">Continue to homepage</a>
      </p>
    </div>
      
  )
}
}
}

export default App;
