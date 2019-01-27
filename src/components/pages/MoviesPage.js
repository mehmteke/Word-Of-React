import React, {Component}  from  'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '..//MoviesList';

class MoviesPage extends Component{
    static propTypes = {
        movies: PropTypes.array.isRequired
    };
    render(){
        console.log(this.props.movies);
        return (
            <div>
                <h2> Movies Page</h2> 
                <MoviesList movies = {this.props.movies}></MoviesList>
            </div>
        )
    }
}

// 1. Kullanım
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};


// // 2. Kullanım
// const mapStateToProps = ({movies}) => {
//     return {
//         movies
//     }
// };

export default connect(mapStateToProps)(MoviesPage);
