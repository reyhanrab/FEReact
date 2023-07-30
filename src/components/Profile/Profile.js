import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FORMCONFIG } from "./profile.config";
import GenerateForm from "../common/GenerateForm/GenerateForm";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Profile() {
  return (
    <Box sx={{ marginTop: "calc(100% - 95%)" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <Paper elevation={3}>
            <div style={{ padding: "20px", backgroundColor: "#e2e8ec" }}>
              <Typography style={{ textAlign: "center" }}>Mohammed Reyhan</Typography>
              <Typography style={{ textAlign: "center" }}>@reyhanrab</Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <PersonOutlineOutlinedIcon sx={{ fontSize: "100px" }} />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={3}>
            <div style={{ backgroundColor: "#e2e8ec", padding: "20px" }}>Edit Profile</div>
            <RenderEditProfileForm />
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
}

const RenderEditProfileForm = (props) => {
  const dispatch = useDispatch();
  const formRef = React.useRef();

  const userData = useSelector((state) => state.GeneralReducer.userData);

  console.log("userDAta", userData);

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

    console.log("obj", obj);
    // dispatch(CREATEPROJECTS(obj, formRef, props.handleDialog, props.showDialog));
  };

  return (
    <>
      <form id="editProfileForm" ref={formRef} noValidate={true} onSubmit={handleSubmit}>
        <Grid container spacing={1} sx={{ padding: "20px" }}>
          {userData.map((user) =>
            FORMCONFIG.map((element) => {
              return (
                <Grid item xs={element.xs} key={element.id}>
                  <GenerateForm data={element} tableRowData={user} />
                </Grid>
              );
            })
          )}
        </Grid>
        <Box sx={{ padding: "20px" }}>
          <Button variant="contained" disabled={true} sx={{ marginLeft: "10px" }}>
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Profile;
