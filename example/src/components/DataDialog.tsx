import { Dialog, DialogTitle, Typography } from "@material-ui/core";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const DataDialog = (props: {
  open: boolean;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Dialog open={props.open} onClose={() => props.setData("")}>
      <DialogTitle>
        <Typography variant="h5">Example Data</Typography>
      </DialogTitle>
      <pre style={{ padding: "20px" }}>{props.data}</pre>
    </Dialog>
  );
};

export default DataDialog;
