import React from 'react';
import style from '../style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class Body extends React.Component {
    render() {
        return <React.Fragment>
            <div className={`$"container-fluid", ${style.Body} `}>
                 {/* <div className={ {..."row-md", ...style.Body} }>  */}
                    {/* <div className={style.Body}> */}
                        {/* <div className="col-md"> */}
                           
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </React.Fragment>
    }
}
export default Body;