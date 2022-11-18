import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../Controls/Controls";
import { useForm, Form } from "./UseForm";
import { ref, set, remove } from "firebase/database";
import { db, auth } from "../../firebase/config";
import { uid } from "uid";

const initialValues = {
  id: 0,
  city: "",
  description: "",
  picture: "",
  departure: new Date(),
  comingBack: new Date(),
};

export default function CityForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("city" in fieldValues)
      temp.city =
        fieldValues.city.length > 1 ? "" : "Minimum 2 characters required.";
    if ("description" in fieldValues)
      temp.description =
        fieldValues.description.length > 5 ? "" : "Just write something here.";
    if ("picture" in fieldValues)
      temp.picture = /\.(jpeg|jpg|png)$/.test(fieldValues.picture)
        ? ""
        : "Try something ended with .jpeg .jpg .png.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, setValues, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(auth.currentUser.uid);
    // console.log({url});
    let ci = values.city;
    let de = values.description;
    let pi = values.picture;
    saveCity(ci, de, pi);
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  //Write
  const saveCity = (city, description, picture) => {
    const uidd = uid();
    const cityDb = ref(db, `/userData/${auth.currentUser.uid}/${uidd}`);
    if (city.length > 2) {
      set(cityDb, {
        id: uidd,
        name: city,
        description: description,
        image: picture,
      });
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
            label="Picture Url"
            name="picture"
            value={values.picture}
            onChange={handleInputChange}
            error={errors.picture}
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
            <Controls.Button type="submit" text="Submit" onClick={saveCity} />
            <Controls.Button text="Reset" color="#3399ff" onClick={resetForm} />
          </div>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
