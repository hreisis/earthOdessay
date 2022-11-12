import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../Controls/Controls";
import { useForm, Form } from "./UseForm";
import ProgressBar from "../ProgressBar";

const initialFValues = {
  id: 0,
  city: "",
  description: "",
  pictureLink: "",
  departure: new Date(),
  comingBack: new Date(),
};

export default function CityForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const { values, setValues, handleInputChange, resetForm } = useForm(
    initialFValues,
    true
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="file"
            //label="Picture Upload"
            name="picture upload"
            value={values.picture}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.DatePicker
            name="Departure"
            label="departure"
            value={values.departure}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="Coming Back"
            label="coming back"
            value={values.comingBack}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>{" "}
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
