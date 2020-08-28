import React from 'react';
import'../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Details.css'

const Details = (props) => {
        const {img,name,price,username,duration}=props.course 
    return ( 
        //This part from bootstrap//
        <div className="container">
            <div className="courses" >
               <section  className="col-md-4">
               <div className="card" >
                            <img style={{width:"120px",height:"89px",margin:"auto"}} src={img} class="card-img-top" alt="..."/>
                            <h4>{name}</h4>
                    <div className="card-body">
                            <h5  className="card-title">Fees {price} tk only</h5>
                            <p className="card-text">Course Instructor : <strong>{username}</strong> </p>
                            <p>Duration of Course <br/>
                            <strong>{duration}</strong>  months</p>
                            <button onClick={() =>props.handleAddCourse(props.course)} class="btn btn-primary">Enroll Now </button> 
                    </div>
                </div>
               </section>
            </div>
        </div>
        
        
    );
};

export default Details;