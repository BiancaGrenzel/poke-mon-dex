import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Photo from ".";
import * as Theme from "../../styles/tokens/index";

describe("Photo Component", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Photo id="squirtle" />
      </ThemeProvider>
    );

    expect(getByTestId("photo-container-squirtle")).toBeTruthy();
  });

  it("should render image", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={Theme}>
        <Photo
          alt="squirtle"
          src="https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png"
        />
      </ThemeProvider>
    );
    expect(getByAltText("squirtle")).toHaveAttribute(
      "src",
      "https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png"
    );
  });

  it("should render alt attribute", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={Theme}>
        <Photo
          id="squirtle"
          alt="squirtle"
          src="https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png"
        />
      </ThemeProvider>
    );
    expect(getByAltText("squirtle")).toHaveAttribute("alt", "squirtle");
  });

  it("should render id attribute", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Photo
          id="squirtle"
          alt="squirtle"
          src="https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png"
        />
      </ThemeProvider>
    );
    expect(getByTestId("photo-container-squirtle")).toHaveAttribute(
      "id",
      "squirtle"
    );
  });
});
