import * as React from "react";
import {
  FormConfig,
  dialogDataFooter,
  dialogDataHeader,
  dialogStructureFooter,
  dialogStructureHeader,
} from "./EditProject.config";
import PopUp from "../../../common/PopUp/PopUp";
import GenerateForm from "../../../common/GenerateForm/GenerateForm";
import { useDispatch, useSelector } from "react-redux";
import { handleOptionsData } from "../../../common/commonfunctions";
import { EDITPROJECT } from "../../../../actions/Projects/ActionCreators";
import { Grid } from "@mui/material";

function EditProject(props) {
  return (
    <>
      <PopUp
        showDialog={props.showDialog}
        handleDialog={props.handleDialog}
        dialogDataHeader={dialogDataHeader}
        dialogStructureHeader={dialogStructureHeader}
        dialogDataFooter={dialogDataFooter}
        dialogStructureFooter={dialogStructureFooter}
        formName="editProjectForm"
      >
        <RenderEditProjectForm
          handleDialog={props.handleDialog}
          showDialog={props.showDialog}
          tableRowData={props.tableRowData}
        />
      </PopUp>
    </>
  );
}

const RenderEditProjectForm = (props) => {
  const [dateValue, setDateValue] = React.useState({});

  const dispatch = useDispatch();
  const formRef = React.useRef();

  const userData = useSelector((state) => state.GeneralReducer.userData);
  const statusData = useSelector((state) => state.StaticDataReducer.statusData);
  const projectsData = useSelector((state) => state.ProjectReducer.projectData);

  const tableRowData = projectsData.find((project) => project._id === props.tableRowData._id);

  const modifiedFormConfig = handleOptionsData(FormConfig, "owner", userData);
  const modifiedFormConfig2 = handleOptionsData(modifiedFormConfig, "status", statusData);

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
    dispatch(EDITPROJECT(obj, tableRowData._id, formRef, props.handleDialog, props.showDialog));
  };

  return (
    <>
      <form id="editProjectForm" ref={formRef} noValidate={true} onSubmit={handleSubmit}>
        <Grid container>
          {modifiedFormConfig2.map((element) => {
            return (
              <Grid item xs={element.xs} key={element.id}>
                <GenerateForm data={element} tableRowData={tableRowData} handleChange={handleChange} />
              </Grid>
            );
          })}
        </Grid>
      </form>
    </>
  );
};

export default React.memo(EditProject);
