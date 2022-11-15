import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../Controls/Controls";
import { useForm, Form } from "./UseForm";
import ProgressBar from "../ProgressBar";
import { ref, set } from "firebase/database";
import { db } from "../../firebase/config";

const initialValues = {
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

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("city" in fieldValues)
      temp.city =
        fieldValues.city.length > 2 ? "" : "Minimum 3 characters required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, setValues, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
    //   addOrEdit(values, resetForm);
    // }
    let ci = values.city; let de = values.description;
    saveCity(ci, de);    console.log("ok");
  };

  function saveCity(city, description) {
    set(ref(db, "city/" + city), {
      name: city,
      description: description,
    });
  }

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
            error={errors.city}
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
            onChange={handleInputChange}
            value={values.departure}
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
