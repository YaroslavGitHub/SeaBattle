import React, { Component } from 'react';
import axios from 'axios';

export default class NewGame extends Component {
   constructor( props ) {
      super( props );


      this.onSubmit = this.onSubmit.bind( this );
   }


   onSubmit( e ) {
      e.preventDefault();
      axios.post( 'http://localhost:5000/shots/all/' )
   }

   componentDidMount() {
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
         After press "Restart shots" please update page
            <form onSubmit={this.onSubmit}>

               <input type="submit" value="Restart shots" className="btn btn-warning"/>
            </form>

         </div>
      );
   }
}
