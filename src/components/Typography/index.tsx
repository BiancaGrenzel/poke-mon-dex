import { StyledTypography } from "./style";
import { TypographyProps } from "./types";

export const Typography = ({
  variant,
  color,
  weight,
  children,
}: TypographyProps) => {
  return (
    <StyledTypography
      variant={variant}
      color={color}
      weight={weight}
      data-testid="typography-component"
    >
      {children}
    </StyledTypography>
  );
};
