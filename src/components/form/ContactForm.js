import { validateContactForm } from "../../utils/validateContactForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <form 
    initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        agree: false,
    }}
    onSubmit={handleSubmit} validate={validateContactForm}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            autoComplete="fname"
            name="firstName"
            id="firstName"
            label="First name"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="lastName"
            id="lastName"
            label="Last name"
            autoComplete="lname"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="email"
            id="email"
            label="Email address"
            autoComplete="email"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            multiline
            rows={8}
            fullWidth
            autoComplete="message"
            name="message"
            id="message"
            label="Message"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="terms" value="1" color="primary" />}
            label="I agree to the terms of use and privacy policy."
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button type="submit" fullWidth variant="contained" color="dark">
        Submit
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
