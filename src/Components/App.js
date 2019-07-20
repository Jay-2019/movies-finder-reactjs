import React from 'react';
//  import Searchbar from './SearchBar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Omdb from './Omdb';


class App extends React.Component {
    state = {
        movieTitle: ''
    }


    getSearchBarData = (data) => {
        this.setState({ movieTitle: data });
        console.log(data);



    }

    render() {
        console.log("", this.state.movieTitle);
        return <React.Fragment>
            <Header sendSearchBarData={this.getSearchBarData} />
            {this.state.movieTitle === "" ? <Body /> :<Omdb setMovieTitle={this.state.movieTitle} /> }
            <Footer />
        </React.Fragment>
    }
}
export default App; 