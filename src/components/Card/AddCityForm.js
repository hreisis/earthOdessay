import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../form/useForm";

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

  const { values, setValues, handleInputChange, resetForm } = useForm(
    initialFValues,
    true
  );

  const handleSubmit = (e) => {
    e.preventDefault();
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
            label="Picture Link"
            name="picture link"
            value={values.pictureLink}
            onChange={handleInputChange}
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
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
