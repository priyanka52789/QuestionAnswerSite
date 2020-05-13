import { IWebPartContext } from "@microsoft/sp-webpart-base";
import pnp, {
  SearchQuery,
  Sort,
  SortDirection,
  ItemAddResult,
  ItemUpdateResult,
  RoleType,
  CheckinType,
  PermissionKind,
  ListItemFormUpdateValue,
} from "sp-pnp-js";
import { Logger, LogLevel, ILogEntry, ConsoleListener } from "@pnp/logging";
import AdvancedLoggingService from "./AdvancedLogging";
import { ILogData } from "./AdvancedLogging";
import { sp } from "@pnp/sp";
import QueryInfo from "../models/QueryInfo";

export default class SharePointDataProvider {
  private _webPartContext: IWebPartContext;
  private _libraryAbsoluteUrl: string;
  private _webAbsoluteUrl: string;
  private _configData: any;

  constructor(value: IWebPartContext, libraryUrl: string, configData: any) {
    this._webPartContext = value;
    this._libraryAbsoluteUrl =
      libraryUrl.lastIndexOf("/") == libraryUrl.length - 1
        ? libraryUrl.substr(0, libraryUrl.length - 1)
        : libraryUrl;
    this._webAbsoluteUrl = value.pageContext.web.absoluteUrl;
    this._configData = configData;
  }

  // Generic function for getting items from list
  public getItemsFromList(
    documentLibName: string,
    queryInfo: QueryInfo
  ): Promise<any[]> {
    //debugger;
    try {
      return pnp.sp.web.lists
        .getByTitle(documentLibName)
        .items.top(queryInfo.recordCount)
        .select(queryInfo.selectString)
        .orderBy(queryInfo.orderByColumnName, queryInfo.orderByIsAscending)
        .filter(queryInfo.filterString)
        .expand(queryInfo.expandString)
        .get()
        .then((result) => {
          return result;
        });
    } catch (e) {
      console.log("error - ", e);
      let err: any = [];
      //utilized in advanced logging
      let data: ILogData = {
        FileName: "SharePointDataProvider.ts",
        MethodName: "getItemsFromList",
        Stack: e.stack ? e.stack : "",
      };
      let logEntry: ILogEntry = {
        message: e.message + "-Library Name:" + documentLibName,
        level: LogLevel.Error,
        data: data,
      };
      Logger.log(logEntry);
      return err;
    }
  }
}
