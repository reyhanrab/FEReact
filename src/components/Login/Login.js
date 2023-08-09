import { Button, Grid, Paper, Box } from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormConfig } from "./Login.config";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../actions/General/ActionCreators";
import "./Login.css";
import { checkAuth } from "../common/commonfunctions";
import GenerateForm from "../common/GenerateForm/GenerateForm";
import AdbIcon from "@mui/icons-material/Adb";


function Login() {
  const dispatch = useDispatch();
  const formRef = React.useRef();
  const navigate = useNavigate();

  React.useEffect(() => {
    const isAuthenticated = checkAuth();
    if (isAuthenticated) {
      navigate("/main");
    }
  }, []);

  return (
    <Paper sx={{ backgroundColor: "#1976d2" }}>
      <div className="form">
        <Paper elevation={3}>
          <Box sx={{ height: "auto", width: "350px", padding: "30px 50px" }}>
            <RenderLoginForm formRef={formRef} dispatch={dispatch} navigate={navigate} />
          </Box>
          <Box sx={{ padding: "20px", backgroundColor: "#8080802b", textAlign: "center" }}>
            <Button component={Link} to="/signup">
              New User ? SignUp
            </Button>
          </Box>
        </Paper>
      </div>
    </Paper>
  );
}

const RenderLoginForm = (props) => {
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
    props.dispatch(LOGIN(obj, props.formRef, props.navigate));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>SIGN IN</h3>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#1976d2" }} />
        <h3>Work Tracker</h3>
        </Box>
      </div>
      <form id="loginForm" onSubmit={handleSubmit} ref={props.formRef}>
        <Grid container sx={{ padding: "10px"}}>
          {FormConfig.map((element) => {
            return (
              <Grid item xs={element.xs} key={element.id}>
                <GenerateForm data={element} />
              </Grid>
            );
          })}
        </Grid>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" sx={{ width: "60%" }}>
            SIGN IN
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
