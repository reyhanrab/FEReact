import * as React from "react";
import { FormConfig } from "./SignUp.config";
import "./SignUp.css";
import { Button, Grid, Paper, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { SIGNUP } from "../../actions/General/ActionCreators";
import GenerateForm from "../common/GenerateForm/GenerateForm";
import AdbIcon from "@mui/icons-material/Adb";

function SignUp() {
  const dispatch = useDispatch();
  const formRef = React.useRef();
  const navigate = useNavigate();

  ////Selectors
  const GeneralReducer = useSelector((state) => state.GeneralReducer, shallowEqual);

  return (
    <>
      <Paper sx={{ backgroundColor: "#1976d2" }}>
        <div className="form">
          <Paper elevation={3}>
            <Box sx={{ height: "auto", width: "350px", padding: "30px 50px" }}>
              <RenderSignUpForm formRef={formRef} dispatch={dispatch} navigate={navigate} />
            </Box>
            <Box sx={{ padding: "20px", backgroundColor: "#8080802b", textAlign: "center" }}>
              <Button component={Link} to="/login">
                Already a user ? Sign In
              </Button>
            </Box>
          </Paper>
        </div>
        <>{GeneralReducer.successMsg}</>
      </Paper>
    </>
  );
}

const RenderSignUpForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    for (const key in obj) {
      let trimmedValue = obj[key].trim();
      if (trimmedValue.length === 0) {
        delete obj[key];
      }
    }
    props.dispatch(SIGNUP(obj, props.formRef, props.navigate));
  };

  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h3>SIGN UP</h3>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#1976d2" }} />
          <h3>Work Tracker</h3>
        </Box>
      </Box>
      <form onSubmit={handleSubmit} ref={props.formRef}>
        <Grid container>
          {FormConfig.map((element) => {
            return (
              <Grid item xs={element.xs} key={element.id}>
                <GenerateForm data={element} key={element.id} />
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" sx={{ width: "60%" }}>
            Sign Up
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SignUp;
