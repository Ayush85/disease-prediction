import React from 'react';
import '../../App.css';

export default function Heart() {
  return (
    <>
       <center className='heart'>
                    
          <h1>
            Heart Disease Prediction
          </h1>
          <br/>


          <div className="wrapper">
            <div className="container my-5">
              <div className="row">
                <div className="col-md-10 col-sm-6 mx-auto">
                  <form className="" action="{{url_for('heart_predict')}}" method="post">

                    <div className="form-group">
                      <input type="number" name="age" id="age" className="form-control" required />
                      <label for="age" className="ph-area">Enter Your Age</label>
                    </div>

                    <div className="form-group">
                     <select className="form-control" name="sex" required="required">
                        <option value="" selected>Select Gender</option>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <select className="form-control chosenn" name="cp" required="required">
                        <option value="" selected>Select Chest Pain Type(cp)</option>
                        <option value="0">Typical Angina</option>
                        <option value="1">Atypical Angina</option>
                        <option value="2">Non Anginal Pain</option>
                        <option value="3">Asymptomatic</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input type="number" name="trestbps" id="trestbps" className="form-control" required />
                      <label for="trestbps" className="ph-area">Enter Resting Blood Pressure (mm Hg)(trestbps)</label>
                      </div>

                    <div className="form-group">
                      <input type="number" name="chol" id="chol" className="form-control" required />
                      <label for="chol" className="ph-area">Enter Serum Cholestoral (mg/dl)(chol)</label>
                    </div>

                    <div className="form-group">
                      <select className="form-control" name="fbs" required="required">
                        <option value="" selected>Fasting Blood Sugar {'>'} 120 (mg/dl)(fbs)</option>
                       <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>


                    <div className="form-group">
                      <select className="form-control chosenn" name="restecg" required="required">
                        <option value="" selected>Rresting Electrocardiographic Results(restecg)</option>
                        <option value="0">Normal</option>
                        <option value="1">Abnormal</option>
                        <option value="2">Probable</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input type="number" name="thalach" id="thalach" className="form-control" required />
                      <label for="thalach" className="ph-area">Enter Maximum Heart Rate Achieved (thalach)</label>
                    </div>

                    <div className="form-group">
                      <select className="form-control" name="exang" required="required">
                        <option value="" selected>Select Exercise Induced Angina (exang)</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input type="text" name="oldpeak" id="oldpeak" className="form-control" required />
                      <label for="oldpeak" className="ph-area">Enter Your Oldpeak(oldpeak)</label>
                    </div>

                    <div className="form-group">
                      <select className="form-control chosenn" name="slope" required="required">
                        <option value="" selected>Select Peak Exercise ST Segment (Slope)</option>
                        <option value="0">Upsloping</option>
                        <option value="1">Flat</option>
                        <option value="2">Downsloping</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input type="submit" id="a" className="btn btn-primary" value="Submit"/>
                      <input type="reset" className="btn btn-danger" value="Reset"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


      </center>
    </>
  );
}
