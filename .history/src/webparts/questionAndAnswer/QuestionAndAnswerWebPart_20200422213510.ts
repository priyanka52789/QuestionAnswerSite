import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "QuestionAndAnswerWebPartStrings";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import { IQuestionAndAnswerProps } from "./components/IQuestionAndAnswerProps";

export interface IQuestionAndAnswerWebPartProps {
  description: string;
  menuType: string;
}

export default class QuestionAndAnswerWebPart extends BaseClientSideWebPart<
  IQuestionAndAnswerWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<IQuestionAndAnswerProps> = React.createElement(
      QuestionAndAnswer,
      {
        description: this.properties.description,
        menuType: this.properties.menuType,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
                PropertyPaneDropdown("menuType", {
                  label: strings.MenuFieldLabel,
                  selectedKey: "PivotMenu",
                  options: [
                    { key: "PivotMenu", text: "Pivot Menu" },
                    { key: "NavMenu", text: "Nav Menu" },
                  ],
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
