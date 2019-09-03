import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from '../style.module.css';
import temporaryPoster from './404.png'; // with import temporary poster


class Omdb extends React.Component {

    state = {
        error: null,
        isLoading: true,
        apiData: [],
        totalResults:''
    }

    // here component will receive New props every time
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.setMovieTitle);
        // fetching data from the given API
        fetch(`http://www.omdbapi.com/?apikey=7b011e0e&s=${nextProps.setMovieTitle}&type=${nextProps.setOption}`)
            // get the API response and receive data in JSON format...
            .then((response) => {
                if(!response.ok) throw new Error(response.status);
                else return response.json();
              })
            // then we updata the current state
            .then(data => this.setState({ apiData: data.Search, totalResults:data.totalResults, isLoading: false }))

            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }))


    }
    render() {
        const { error, isLoading, apiData } = this.state;
        return <>
            <div className={`$"container", ${style.omdbBody} `}>
            <div className={`$"card", ${style.card} `}>  
                {error ? <p>error.message</p> : null}
                {/* Display a message if we encounter an error */}
                {error ? <p>{error.message}</p> : null}
                {/* // Here's our data check */}
                <div>
                    <h1 color="red">Total Result found : {this.state.totalResults}</h1>
                    <br />
                    &nbsp;
                </div>
                {!isLoading ?
                 (apiData.map((data) => {
                        const { Title, Year, Poster, omdbID, Type} = data;
                        return (
                                <div key={omdbID}>
                            <p>{Poster === "N/A" ? <img src={temporaryPoster} className="card-img-top" alt="Movie Poster" /> : <img src={data.Poster} className="card-img-top" alt="Movie Poster" />}</p>
                            <p>{Title}</p>
                            <p>{Type}</p>
                            <p>{Year}</p>
                          </div>
                        )
                    }
                    ))
                    : (<h3>LOading...</h3>)
                }

            </div>
            &nbsp;
            <br />
            </div>
</>
    }
}

export default Omdb;
