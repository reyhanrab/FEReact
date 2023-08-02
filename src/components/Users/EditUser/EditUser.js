import * as React from "react";
import { FormConfig, dialogDataFooter, dialogDataHeader, dialogStructureFooter, dialogStructureHeader } from "./EditUser.config";
import PopUp from "../../common/PopUp/PopUp";
import GenerateForm from "../../common/GenerateForm/GenerateForm";
import { useDispatch, useSelector } from "react-redux";
import { handleOptionsData } from "../../common/commonfunctions";
import { Grid } from "@mui/material";
import { EDITUSER } from "../../../actions/Users/ActionCreators";

function EditUser(props) {
  return (
    <>
      <PopUp
        showDialog={props.showDialog}
        handleDialog={props.handleDialog}
        dialogDataHeader={dialogDataHeader}
        dialogStructureHeader={dialogStructureHeader}
        dialogDataFooter={dialogDataFooter}
        dialogStructureFooter={dialogStructureFooter}
        formName="editUserForm"
      >
        <RenderEditUserForm handleDialog={props.handleDialog} showDialog={props.showDialog} tableRowData={props.tableRowData} />
      </PopUp>
    </>
  );
}

const RenderEditUserForm = (props) => {
  const dispatch = useDispatch();
  const formRef = React.useRef();

  const userData = useSelector((state) => state.UsersReducer.userData);
  const rolesData = useSelector((state) => state.StaticDataReducer.rolesData);

  const tableRowData = userData.find((user) => user._id === props.tableRowData._id);

  const modifiedFormConfig = handleOptionsData(FormConfig, "role", rolesData);

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
    dispatch(EDITUSER(tableRowData._id, obj, formRef, props.handleDialog, props.showDialog));
  };

  return (
    <>
      <form id="editUserForm" ref={formRef} noValidate={true} onSubmit={handleSubmit}>
        <Grid container>
          {modifiedFormConfig.map((element) => {
            return (
              <Grid item xs={element.xs} key={element.id}>
                <GenerateForm data={element} tableRowData={tableRowData} />
              </Grid>
            );
          })}
        </Grid>
      </form>
    </>
  );
};

export default React.memo(EditUser);
