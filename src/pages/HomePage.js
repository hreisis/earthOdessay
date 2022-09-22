import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import WallPaper from "../components/WallPaper/WallPaper";
import Menu from "../components/Menu/Menu";

const HomePage = () => {
  return (
    <Container>
      <Menu />
      <Typography variant="h1" gutterBottom>
        Earth Odessay
      </Typography>

      <WallPaper />
    </Container>
  );
};

export default HomePage;
