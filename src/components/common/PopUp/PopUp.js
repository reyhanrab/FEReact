import * as React from "react";
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from "@mui/material";
import { returnValueOrDefault, returnValueOrDefaultNested } from "../commonfunctions";

const PopUp = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDialogBox = () => {
    props.handleDialog(!props.showDialog);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={returnValueOrDefault(props.popupWidth, "sm")}
        fullWidth={true}
        open={props.showDialog}
      >
        <DialogTitle className={"MuiDialogTitle"}>
          <Grid container sx={{ alignItems: "center" }}>
            {props.dialogDataHeader?.map((headerData) =>
              props.dialogStructureHeader
                .filter((structureData) => headerData.accessor == structureData.accessor)
                .map((structureData, index) => (
                  <Grid
                    item
                    xs={structureData.size}
                    style={returnValueOrDefault(structureData.styles, {})}
                    key={`${structureData.label}_${index + 1}`}
                    onClick={returnValueOrDefaultNested(
                      [headerData.operation?.includes("click")],
                      [() => handleDialogBox()],
                      null
                    )}
                  >
                    {headerData[structureData.component]}
                  </Grid>
                ))
            )}
          </Grid>
        </DialogTitle>

        <DialogContent sx={returnValueOrDefault(props.style, { padding: "8px 24px" })}>{props.children}</DialogContent>

        <DialogActions className={"MuiDialogActions"}>
          {props.dialogDataFooter?.map((footerData) =>
            props.dialogStructureFooter?.map((structureData, index) => {
              if (footerData.accessor == structureData.accessor && footerData.type == "button") {
                return (
                  <Button
                    disabled={returnValueOrDefault(footerData.disabled, false)}
                    color={returnValueOrDefault(footerData.color, "primary")}
                    style={returnValueOrDefault(structureData.styles, {})}
                    key={`${structureData.label}_${index + 1}`}
                    type={returnValueOrDefault(structureData.type, "")}
                    variant={returnValueOrDefault(footerData.variant, "")}
                    size={returnValueOrDefault(footerData.size, "")}
                    form={returnValueOrDefaultNested([footerData.operation?.includes("click") && structureData.type == "submit"], [props.formName], "")}
                    onClick={returnValueOrDefaultNested(
                      [footerData.operation?.includes("click") && structureData.type !== "submit"],
                      [() => props.handleDialog(!props.showDialog, structureData.type)],
                      null
                    )}
                  >
                    <div style={{ textTransform: "capitalize", fontSize: "14px", fontWeight: 400 }}>{footerData.label}</div>
                  </Button>
                );
              }
            })
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUp;
