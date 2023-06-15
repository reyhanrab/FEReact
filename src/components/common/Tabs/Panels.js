import { Box } from "@mui/material";
import * as React from "react";

export default function Panels({ components, TabsData, value }) {
  return (
    <Box>
      {TabsData.map((tabData, index) => {
        return (
          <div role="tabpanel" key={`${TabsData.id}+${index+1}`}>
            {components?.map((component, compIndex) => {
              if (tabData.value == value && tabData.component == component.key) {
                return <div key={`${component.key}_${compIndex + 1}`}>{component.value}</div>;
              }
            })}
          </div>
        );
      })}
    </Box>
  );
}
