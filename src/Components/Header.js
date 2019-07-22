import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../style.module.css';




class Header extends React.Component {
    state = {
        title: '',
        option: ''
    }

    handleSelect = (event) => {
    this.setState({ option : event.target.value });
     
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();


        
        const k = document.getElementById("movieName").value;
        if (k === "") {
            alert("Please Enter Movie Name...");
            return

        } else {
            this.props.sendSearchBarData(this.state.title, this.state.option); // send data to App.js via callBack function
            this.setState({ title: "" });
            this.setState({ option: "" });
        }

    };

    

    render() {
        return <React.Fragment>
            <div className={`$"container-fluid", ${style.Header}`}>
                <div className="row-md">

                    <div className="col-md">
                        <form onSubmit={this.handleSubmit}  >
                            <input id="movieName" type="text" value={this.state.title} placeholder="Find Movies, Series & More" size='30' onChange={this.handleChange} className={style.textbar} />
                            <div className={style.btn}>
                                <select className="form-control-md" onChange={this.handleSelect}>
                                    <option value="select">Select</option>
                                    <option value="movie">movie</option>
                                    <option value="series">series</option>
                                    <option value="episode">episode</option>
                                </select>
                            </div>
                            <input type="submit" value="Submit" className={style.btn} />
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    }
}
export default Header;