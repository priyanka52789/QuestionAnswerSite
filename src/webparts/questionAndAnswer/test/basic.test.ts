/// <reference types="jest" />

import * as React from "react";
import { configure, mount, ReactWrapper } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import QuestionAndAnswer from "../components/QuestionAndAnswer";
import { IQuestionAndAnswerProps } from "../components/IQuestionAndAnswerProps";

describe("Enzyme basics", () => {
  let reactComponent: ReactWrapper<IQuestionAndAnswerProps, {}>;

  beforeEach(() => {
    reactComponent = mount(
      React.createElement(QuestionAndAnswer, {
        description: "SPFx Test",
      })
    );
  });

  afterEach(() => {
    reactComponent.unmount();
  });

  it("should root web part element exists", () => {
    // define the css selector
    let cssSelector: string = "#QuestionAndAnswer";

    // find the element using css selector
    const element = reactComponent.find(cssSelector);
    expect(element.length).toBeGreaterThan(0);
  });

  it("should has the correct title", () => {
    // Arrange
    // define contains/like css selector
    let cssSelector: string = "h1";

    // Act
    // find the element using css selector
    const text = reactComponent.find(cssSelector).text();

    // Assert
    expect(text).toBe("SPFx Test webpart");
  });
});
