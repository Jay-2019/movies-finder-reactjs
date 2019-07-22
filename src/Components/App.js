import React from 'react';
//  import Searchbar from './SearchBar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Omdb from './Omdb';


class App extends React.Component {
    state = {
        movieTitle: '',
        option: ''
    }


    getSearchBarData = (title, option) => {
        this.setState({ movieTitle: title, option: option});
        // this.setState({ option: option });
        console.log(title);
        console.log(option);
    }

    render() {
        console.log("", this.state.movieTitle);
        return <React.Fragment>
            <Header sendSearchBarData={this.getSearchBarData} />
            {this.state.movieTitle === "" ? <Body /> : <Omdb setMovieTitle={this.state.movieTitle} setOption={this.state.option} />}
            <Footer />
        </React.Fragment>
    }
}
export default App; 