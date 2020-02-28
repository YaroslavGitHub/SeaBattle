import React, { Component } from 'react';
import axios from 'axios';

export default class ShotUpdate extends Component {
   constructor( props ) {
      super( props );


      this.onChangefieldA = this.onChangefieldA.bind( this );
      this.onChangefieldB = this.onChangefieldB.bind( this );
      this.onSubmit = this.onSubmit.bind( this );


      this.state = {
         gamer: 'first',
         fieldA: 0,
         fieldB: 0,
         shot: true,
         ship: false,
         seaMap: [],
      };
   }


   onChangefieldA( e ) {
      this.setState({
         fieldA: e.target.value,
      });
   }

   onChangefieldB( e ) {
      this.setState({
         fieldB: e.target.value,
      });
   }

   onSubmit( e ) {
      e.preventDefault();

      const shot = {
         gamer: this.state.gamer,
         fieldA: this.state.fieldA,
         fieldB: this.state.fieldB,
         shot: this.state.shot,
         ship: this.state.ship
      };
 
      alert( ` U shoot on field: ${this.state.fieldA}${this.state.fieldB} to see result on Sea map please update page` );

      axios.post( `http://localhost:5000/shots/findone/${this.state.fieldA}${this.state.fieldB}`)
         .then(( res ) => console.log( res.data ))

     }
   

   componentDidMount() {
      axios.get( 'http://localhost:5000/shots/' )
         .then(( response ) => {
            if ( response.data.length > 0 ) {
               this.setState({
                  seaMap: response.data,
               });
            }
         })
         .catch(( error ) => {
            console.log( error );
         });
      console.log( this.seaMap );
   }

   UNSAFE_componentWillMount() {
      axios.get( 'http://localhost:5000/shots/' )
         .then(( response ) => {
            if ( response.data.length > 0 ) {
               this.setState({
                  seaMap: response.data,
               });
            }
         })
         .catch(( error ) => {
            console.log( error );
         });
      console.log( this.seaMap );
   }
   


   render() {
      return (
         <div>
            <h1 className="font-weight-bold">SEA BATTLE</h1>
            <h1> U shot is X={this.state.fieldA} Y={this.state.fieldB} </h1>
            <form onSubmit={this.onSubmit}>
               <label>
        Input X :
                  <input
                     type="number"
                     value={this.state.fieldA}
                     onChange={this.onChangefieldA}
                     min="0" max="9"
                     className="form-group"
                  />
               </label>
               <label>
        Input Y :
                  <input
                     type="number"
                     value={this.state.fieldB}
                     onChange={this.onChangefieldB}
                     min="0" max="9"
                     className="form-group"
                  />
               </label>
               <input type="submit" value="Shot" className="btn btn-light"/>
            </form>

            <div className="grid-container">
            <>
                  {this.state.seaMap.map(( shot ) => (
                     <div><button  style={{
                        color: ( shot.shot && shot.ship ) ? 'red'
                           : ( !shot.shot ) ? 'green'
                              : 'blue',
                     }}>X {shot._id}</button></div>
                  ))}

               </>
            </div>
         </div>
      );
   }
}
