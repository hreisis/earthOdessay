import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import Controls from "../../components/Controls/Controls";
import CloseIcon from "@material-ui/icons/Close";
import { ref, remove } from "firebase/database";
import { db, auth } from "../../firebase/config";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CityCard = ({ city }) => {
  const { id, image, name, description } = city;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteCity = (uid) => {
    console.log(city.id);
    remove(ref(db, `/userData/${auth.currentUser.uid}/${uid}`));
  };

  return (
    //Link to={`${name}`}

    <Card sx={{ maxWidth: 400 }}>
      <Link
        to={"/Itinerary"}
        style={{ color:"black" ,textDecoration: "none" }}
        borderRadius="50"
      >
        <CardHeader title={name} subheader={description} />{" "}
      </Link>
      <Controls.ActionButton color="secondary" onClick={() => deleteCity(city.id)}>
        <CloseIcon />
      </Controls.ActionButton>
      <CardMedia component="img" height="600" image={image} alt={name} />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>...</CardContent>
      </Collapse>
    </Card>
  );
};

export default CityCard;
