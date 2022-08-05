import { Container, StyledImage, StyledObject } from "./style";
import { PhotoProps } from "./types";

const Photo = ({ src, alt, id }: PhotoProps) => {
  return (
    <Container data-testid={`photo-container-${id}`} id={id}>
      <StyledObject data={src} data-testid={`object-${id}`}>
        <StyledImage
          src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
          alt={alt}
          data-testid="error-photo"
        />
      </StyledObject>
    </Container>
  );
};

export default Photo;
