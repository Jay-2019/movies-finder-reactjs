import React from 'react';
import style from '../style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Footer extends React.Component {
   
    
    render() {
        return <React.Fragment>
            <div className="container-fluid">
                <div className={style.Footer} >
                    <div className="row-md">
                        <div className="col-md">
                            <h1>this is footer </h1>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
export default Footer;