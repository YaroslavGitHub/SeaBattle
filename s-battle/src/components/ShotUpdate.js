import React, { Component } from 'react';
import axios from 'axios';

export default class ShotUpdate extends Component {
   constructor( props ) {
      super( props );


      this.onChangefieldA = this.onChangefieldA.bind( this );
      this.onChangefieldB = this.onChangefieldB.bind( this );
      this.onSubmit = this.onSubmit.bind( this );
      this.onClick = this.onClick.bind( this );


      this.state = {
         gamer: 'first',
         fieldA: 0,
         fieldB: 0,
         shot: true,
         description: '',
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

   onClick( e ) {
      e.preventDefault();


      alert( ` U shoot on field: ${this.state.fieldA}${this.state.fieldB} to see result on Sea map please update page` );

      axios.post( `http://localhost:5000/shots/findone/${this.state.fieldA}${this.state.fieldB}` )
         .then(( res ) => console.log( res.data ));
   }

   onSubmit( e ) {
      e.preventDefault();

      const text = {
         description: `U press ${this.state.fieldA}${this.state.fieldA}`,
      };


      axios.post( 'http://localhost:5000/history/add', text )
         .then(( res ) => console.log( res.data ));
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
            <h2> Red - ship wound, Blue - no ship, Green - no shot </h2>
            <h1 className="font-weight-bold">SEA BATTLE</h1>
            <h1> U shot is X={this.state.fieldA} Y={this.state.fieldB} </h1>
            <form onSubmit={this.onSubmit} >
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
               <input type="submit" value="Shot" onClick={this.onClick} className="btn btn-light"/>
            </form>

            <div className="grid-container">
               <>
                  {this.state.seaMap.map(( shot ) => (
                     <div key={shot._id}><div style={{
                        color: ( shot.shot && shot.ship ) ? 'red'
                           : ( !shot.shot && shot.ship ) ? 'green'
                              : ( !shot.shot && !shot.ship ) ? 'green'
                                 : ( shot.shot && !shot.ship ) ? 'blue'
                                    : 'orange',
                     }}>X {shot._id}</div></div>
                  ))}

               </>
            </div>
         </div>
      );
   }
}
