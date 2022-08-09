import NotFoundImg from "../../assets/imgs/not-found.png";
import { Typography } from "../../components/Typography";
import { Container, Image } from "./style";

const NotFound = () => {
  return (
    <Container>
      <Image src={NotFoundImg} />
      <Typography variant="title" color="black" weight="bold">
        Uhoh!
      </Typography>
      <Typography variant="subtitle" color="gray" weight="normal">
        Você entrou em uma página inexistente!
      </Typography>
    </Container>
  );
};

export default NotFound;
