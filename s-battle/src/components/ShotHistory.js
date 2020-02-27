import React, { Component } from 'react';
import axios from 'axios';

export default class ShotHistory extends Component {
   constructor( props ) {
      super( props );


      this.onSubmit = this.onSubmit.bind( this );

      this.state = {
         seaMap: []
      };
   }


   onSubmit( e ) {
      e.preventDefault();
      axios.get( 'http://localhost:5000/shots/history' )
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
      axios.get( 'http://localhost:5000/shots/history' )
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
            <form onSubmit={this.onSubmit}>

               <input type="submit" value="Shot history" className="btn btn-info"/>
            </form>
            <div className="grid-container">
            <>
                  {this.state.seaMap.map(( shot ) => (
                     <div><button  style={{
                        color: ( shot.shot ) ? 'red'
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
