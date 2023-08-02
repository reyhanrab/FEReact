import * as React from "react";
import { FormConfig, dialogDataFooter, dialogDataHeader, dialogStructureFooter, dialogStructureHeader } from "./AddUser.config";
import PopUp from "../../common/PopUp/PopUp";
import GenerateForm from "../../common/GenerateForm/GenerateForm";
import { useDispatch, useSelector } from "react-redux";
import { handleOptionsData } from "../../common/commonfunctions";
import { Grid } from "@mui/material";
import { ADDUSER } from "../../../actions/Users/ActionCreators";

function AddUser(props) {
  return (
    <>
      <PopUp
        showDialog={props.showDialog}
        handleDialog={props.handleDialog}
        dialogDataHeader={dialogDataHeader}
        dialogStructureHeader={dialogStructureHeader}
        dialogDataFooter={dialogDataFooter}
        dialogStructureFooter={dialogStructureFooter}
        formName="createUserForm"
      >
        <RenderCreateUserForm handleDialog={props.handleDialog} showDialog={props.showDialog} />
      </PopUp>
    </>
  );
}

const RenderCreateUserForm = (props) => {
  const [dateValue, setDateValue] = React.useState({});

  const dispatch = useDispatch();
  const formRef = React.useRef();

  const rolesData = useSelector((state) => state.StaticDataReducer.rolesData);

  const modifiedFormConfig = handleOptionsData(FormConfig, "role", rolesData);

  const handleChange = (name, value) => {
    const convertedDate = new Date(value).toISOString();
    setDateValue({
      ...dateValue,
      [name]: convertedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    Object.assign(obj, dateValue);

    for (const key in obj) {
      let trimmedValue = obj[key].trim();
      if (trimmedValue.length === 0) {
        delete obj[key];
      }
    }
    dispatch(ADDUSER(obj, formRef, props.handleDialog, props.showDialog));
  };

  return (
    <>
      <form id="createUserForm" ref={formRef} noValidate={true} onSubmit={handleSubmit}>
        <Grid container>
          {modifiedFormConfig.map((element) => {
            return (
              <Grid item xs={element.xs} key={element.id}>
                <GenerateForm data={element} handleChange={handleChange} key={element.id} />{" "}
              </Grid>
            );
          })}
        </Grid>
      </form>
    </>
  );
};

export default React.memo(AddUser);
