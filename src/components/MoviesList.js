import React, {Component}  from  'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


// // 1. Kullanım
// const MoviesList = ({movies}) => {
//     const emptyMessage = (
//       <p>There are no movies yet</p>
//     ); 
//     const moviesList = (
//         <div>
//             Movies List
//         </div>
//     );
//    return  (
//       <div>
//           {
//                emptyMessage
//            // movies.length === 0 ? emptyMessage : moviesList
//            }
//       </div>
//    );
// };

// 2. Kullanım
const MoviesList = props => {
     const emptyMessage = (
       <p>There are no movies yet</p>
     ); 
     const moviesList = (
         <div>
             Movies List
         </div>
     );
     console.log(props.movies);
    return  (
       <div>
           {  
               props.movies.length === 0 ? emptyMessage : moviesList
            }
       </div>
    );
};
 

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesList;
