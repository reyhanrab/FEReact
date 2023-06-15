import * as React from "react";
import { FormConfig } from "./SignUp.config";
import "./SignUp.css";
import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { SIGNUP } from "../../actions/General/ActionCreators";
import GenerateForm from "../common/GenerateForm/GenerateForm";

function SignUp() {
  const dispatch = useDispatch();
  const formRef = React.useRef();

  ////Selectors
  const GeneralReducer = useSelector((state) => state.GeneralReducer, shallowEqual);

  return (
    <>
      <div className="form">
        <Paper elevation={3} sx={{ height: "auto", width: "350px", padding: "10px" }}>
          <RenderSignUpForm formRef={formRef} dispatch={dispatch} />
        </Paper>
      </div>
      <>{GeneralReducer.successMsg}</>
    </>
  );
}

const RenderSignUpForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    props.dispatch(SIGNUP(obj, props.formRef));
  };

  return (
    <div>
      <center>
        <h3>SignUp</h3>
      </center>
      <form onSubmit={handleSubmit} ref={props.formRef}>
        {FormConfig.map((element) => {
          return (
            <div key={element.id}>
              <GenerateForm data={element} />
            </div>
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </div>
      </form>
      <Link to="/login">Already a User ? LogIn</Link>
    </div>
  );
};

export default SignUp;
