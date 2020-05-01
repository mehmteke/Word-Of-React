import React, { Component } from 'react';


class Child extends Component{
  
 

   constructor(props){
       super(props);
       console.log("Child constructor" + this.props.name);
   }  
   
   
   componentWillMount() {
       console.log("Child componentWillMount");
   }

   componentDidMount() {
       console.log("Child componentDidMount");
   }
   
   componentWillReceiveProps(nextProps){
       if(this.props.name === nextProps.name){
          console.log("props değişmedi bundan dolayı değişşiklik yapılmaya gerek yoktur.")
       }else{
         console.log("props değişti. Yeni Değer :" + nextProps.name + " Eski değer : " + this.props.name);
       }
       // console.log("componentWillReceiveProps nextProps : " + nextProps.name  + "this.props : " + this.props.name);
   }
   
   render(){
    console.log("Child Render");
       return(
          <div>
              <h1>Merhaba Test</h1>
          </div>
       );
   }
}

export  default Child;