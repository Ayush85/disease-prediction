import React from 'react';
import '../../App.css';

export default function Tubercolusis() {
  return (
    <center className="tubercolusis">
      <div className="container">
        <h1>Tuberculosis prediction </h1>
        <br/><br/>
        <form className="form-horizontal" action="/submit" method="post" enctype="multipart/form-data">
      
          <div className="form-group">
            <label className="control-label" for="pwd">Upload Your Image :</label>
            <div className="col-sm-10">          
              <input type="file" className="form-control" placeholder="Hours Studied"  name="my_image" id="pwd" />
            </div>
          </div>
      
          <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </center>
  );
}
