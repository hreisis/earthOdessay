import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ shadows }) => ({
  root: {
    borderRadius: 50,
    minWidth: 400,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    background:
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      "linear-gradient(to right, #3399ff, #33cccc)",
    "&:hover": {
      transform: "scale(1.03)",
    },
    fontSize: 15,
    fontWeight: 500,
    minHeight: 30,
    boxShadow: shadows[0],
    "&:active": {
      boxShadow: shadows[0],
    },
  },
}));


