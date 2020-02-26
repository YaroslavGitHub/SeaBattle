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


   render() {
      return (


         <div>
            <form onSubmit={this.onSubmit}>

               <input type="submit" value="Restart shots" className="btn btn-warning"/>
            </form>

         </div>
      );
   }
}
