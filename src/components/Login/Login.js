import { Button, Paper } from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormConfig } from "./Login.config";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../actions/General/ActionCreators";
import "./Login.css";
import { checkAuth } from "../common/commonfunctions";
import GenerateForm from "../common/GenerateForm/GenerateForm";

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
    <div className="form">
      <Paper elevation={3} sx={{ height: "auto", width: "350px", padding: "10px" }}>
        <RenderLoginForm formRef={formRef} dispatch={dispatch} navigate={navigate} />
      </Paper>
    </div>
  );
}

const RenderLoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    props.dispatch(LOGIN(obj, props.formRef, props.navigate));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>LogIn</h3>
      </div>
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
            LogIn
          </Button>
        </div>
      </form>
      <Link to="/signup">New User ? SignUp</Link>
    </>
  );
};

export default Login;
