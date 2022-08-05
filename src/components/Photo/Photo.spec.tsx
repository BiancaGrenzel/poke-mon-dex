import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Photo from ".";
import * as Theme from "../../styles/tokens/index";

type SutTypes = {
  alt?: string;
  src?: string;
  id?: string;
};

const makeSut = ({ alt, src, id }: SutTypes) =>
  render(
    <ThemeProvider theme={Theme}>
      <Photo alt={alt} src={src} id={id} />
    </ThemeProvider>
  );

describe("Photo Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut({
      id: "squirtle",
      alt: "squirtle",
      src: "https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png",
    });

    expect(getByTestId("photo-container-squirtle")).toBeTruthy();
  });

  it("should render correct image", () => {
    const { getByTestId } = makeSut({
      id: "squirtle",
      alt: "squirtle",
      src: "https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png",
    });

    expect(getByTestId("object-squirtle")).toHaveAttribute(
      "data",
      "https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png"
    );
  });

  it("should render error image", () => {
    const { getByTestId } = makeSut({});
    expect(getByTestId("error-photo")).toHaveAttribute(
      "src",
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    );
  });

  it("should render alt attribute", () => {
    const { getByAltText } = makeSut({
      id: "squirtle",
      alt: "squirtle",
      src: "https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png",
    });

    expect(getByAltText("squirtle")).toHaveAttribute("alt", "squirtle");
  });

  it("should render id attribute", () => {
    const { getByTestId } = makeSut({
      id: "squirtle",
      alt: "squirtle",
      src: "https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png",
    });

    expect(getByTestId("photo-container-squirtle")).toHaveAttribute(
      "id",
      "squirtle"
    );
  });
});
