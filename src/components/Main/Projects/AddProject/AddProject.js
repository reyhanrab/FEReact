import * as React from "react";
import {
  FormConfig,
  dialogDataFooter,
  dialogDataHeader,
  dialogStructureFooter,
  dialogStructureHeader,
} from "./AddProject.config";
import PopUp from "../../../common/PopUp/PopUp";
import GenerateForm from "../../../common/GenerateForm/GenerateForm";

function AddProject(props) {
  return (
    <>
      <PopUp
        showDialog={props.showDialog}
        handleDialog={props.handleDialog}
        dialogDataHeader={dialogDataHeader}
        dialogStructureHeader={dialogStructureHeader}
        dialogDataFooter={dialogDataFooter}
        dialogStructureFooter={dialogStructureFooter}
        formName="createProjectForm"
      >
        <RenderCreateProjectForm />
      </PopUp>
    </>
  );
}

const RenderCreateProjectForm = (props) => {
  return (
    <>
      <form id="createProjectForm" ref={props.formRef} noValidate={true}>
        {FormConfig.map((element) => {
          return (
            <div key={element.id}>
              <GenerateForm data={element} />
            </div>
          );
        })}
      </form>
    </>
  );
};

export default AddProject;
