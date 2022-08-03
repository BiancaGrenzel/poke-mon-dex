import { Container, StyledImage } from "./style";
import { PhotoProps } from "./types";

const Photo = ({ src, alt, id }: PhotoProps) => {
  return (
    <Container data-testid={`photo-container-${id}`} id={id}>
      <StyledImage src={src} alt={alt}/>
    </Container>
  );
};

export default Photo;
