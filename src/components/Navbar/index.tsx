import { Box, Container, Logo, SynviaImage } from "./style";
import Pokeball from "../../assets/imgs/pokeball.svg";
import Synvia from "../../assets/imgs/synvia-A.svg";
import { Typography } from "../Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box onClick={() => navigate("/app/home")}>
        <Logo src={Pokeball} />
        <Typography variant="title" color="white" weight="bold">
          Pokédex
        </Typography>
      </Box>
      <Box>
        <SynviaImage src={Synvia} />
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          color="#fff"
          size="lg"
        />
      </Box>
    </Container>
  );
};

export default Navbar;
