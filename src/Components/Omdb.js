import React from 'react';
import style from '../style.module.css';
import temporaryPoster from './404.png'; // with import temporary poster


class Omdb extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        apiData: []
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.setMovieTitle);
        fetch(`http://www.omdbapi.com/?apikey=7b011e0e&s=${nextProps.setMovieTitle}`) //nextProps.setMovieTitle

            .then((response) => { return response.json() })
            .then(
                (result) => {

                    // let apiData = result.map((data) => {
                    //     return (
                    //         <div key={data.imdbID}>

                    //             {data.Title}
                    //             {data.Year}

                    //         </div>
                    //     )
                    // });
                    this.setState({
                        isLoaded: true,
                        apiData: result.Search
                    });
                },
                (error) => {
                    this.setState({ isLoaded: true, error });
                }

            )
    }
    render() {
        const { error, isLoaded, apiData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <React.Fragment>
                <div className="container-fluid">
                    {/* <div className="row-md"> */}
                    <div className={style.Body}>
                        {/* <div className="col-md"> */}

                        {apiData.map((data) =>

                            <div className="card">
                                <div className={style.card} >

                                    {data.Poster === "N/A" ? <img src={temporaryPoster} className="card-img-top" alt="Movie Poster" /> : <img src={data.Poster} className="card-img-top" alt="Movie Poster" />}
                                    {/* <img src={data.Poster } className="card-img-top" alt="Movie Poster" /> */}
                                    {data.Title}
                                    <br />
                                    {data.Year}
                                </div>
                            </div>
                        )}
                        {/* </div> */}
                        {/* <img src={ this.apiData.Poster } /> */}
                        {/* <ul>
                                    {apiData.map(data => (
                                        
                                    ))}
                                </ul> */}
                        {/* </div> */}
                    </div>
                </div>

            </React.Fragment>
        }
    }
}
export default Omdb;