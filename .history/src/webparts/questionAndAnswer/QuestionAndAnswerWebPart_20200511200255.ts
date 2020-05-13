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
import pnp, { Web } from "sp-pnp-js";
import { SPComponentLoader } from "@microsoft/sp-loader";

import {
  Logger,
  ConsoleListener,
  LogLevel,
  FunctionListener,
  ILogEntry,
  ILogListener,
} from "@pnp/logging";
import SharePointDataProvider from "../../common/services/SharePointDataProvider";
import AdvancedLoggingService from "../../common/services/AdvancedLogging";

export interface IQuestionAndAnswerWebPartProps {
  description: string;
  menuType: string;
  jsfilepath: string;
  cssfilepath: string;
  currentUserId: string;
  currentUserTitle: string;
  currentUserEmail: string;
  configData: any[];
}

export default class QuestionAndAnswerWebPart extends BaseClientSideWebPart<
  IQuestionAndAnswerWebPartProps
> {
  protected onInit(): Promise<void> {
    //debugger;
    pnp.setup({
      spfxContext: this.context,
    });

    //this._dataProvider = new SharePointDataProvider(this.context, this.context.pageContext.web.absoluteUrl);

    return super.onInit();
  }

  private getDataFromConfig(configData: any[], configKey: string) {
    return configData.filter((obj) => obj.Key == configKey).length > 0
      ? configData.filter((obj) => obj.Key == configKey)[0].Value.toString()
      : "";
  }

  public render(): void {
    //this.properties.jsfilepath;
    if (this.properties.cssfilepath) {
      // let cssUrl: string = this.properties.cssfilepath;
      // // if (this.properties.globalCssVersion) {
      // //   cssUrl = cssUrl + "?ver=" + this.properties.globalCssVersion;
      // // }
      // let body: any =
      //   document.getElementsByTagName("body")[0] || document.documentElement;
      // let customStyle: HTMLLinkElement = document.createElement("link");
      // customStyle.href = cssUrl;
      // customStyle.rel = "stylesheet";
      // customStyle.type = "text/css";
      // customStyle.id = "linkglobal";
      // console.log("adding css");
      // body.insertAdjacentElement("beforeEnd", customStyle);
      SPComponentLoader.loadCss(this.properties.cssfilepath);
    }
    if (this.properties.jsfilepath) {
      var script = document.createElement("script");
      script.onload = () => {
        alert("Script loaded and ready");
      };
      script.type = "text/javascript";
      script.src = this.properties.jsfilepath;
      document.getElementsByTagName("head")[0].appendChild(script);
      //SPComponentLoader.loadScript(this.properties.jsfilepath);
    }

    let current = this;
    var absoluteUri = this.context.pageContext.web.absoluteUrl;
    let web = new Web(absoluteUri);
    //Initialize my custom logging service and then subscribe to it as well as a ConsoleListener.
    let advancedLogging = new AdvancedLoggingService(
      "QuestionANdAnswer",
      this.context.pageContext.web.absoluteUrl,
      "ApplicationErrorLog",
      this.context.pageContext.user.loginName
    );
    Logger.subscribe(advancedLogging);
    Logger.subscribe(new ConsoleListener());

    web.currentUser.get().then((user) => {
      current.properties.currentUserId = user.Id.toString();
      current.properties.currentUserTitle = user.Title.toString();

      pnp.sp.web.lists
        .getByTitle("ConfigStore")
        .items.getAll()
        .then((allItems: any[]) => {
          const element: React.ReactElement<IQuestionAndAnswerProps> = React.createElement(
            QuestionAndAnswer,
            {
              description: this.properties.description,
              menuType: this.properties.menuType,
              jsfilepath: this.properties.jsfilepath,
              cssfilepath: this.properties.cssfilepath,
              dataProvider: new SharePointDataProvider(
                current.context,
                current.context.pageContext.web.absoluteUrl,
                allItems
              ),
              currentUserId: current.properties.currentUserId,
              currentUserTitle: current.properties.currentUserTitle,
              configData: allItems,
              siteUrl: current.context.pageContext.web.absoluteUrl,
              spHttpClient: current.context.spHttpClient,
              IsSiteAdmin: user.IsSiteAdmin,
              getDataFromConfig: this.getDataFromConfig,
              context: current.context,
            }
          );
          ReactDom.render(element, current.domElement);
        });
    });
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
                PropertyPaneTextField("jsfilepath", {
                  label: strings.JSFieldLabel,
                }),
                PropertyPaneTextField("cssfilepath", {
                  label: strings.CSSFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
