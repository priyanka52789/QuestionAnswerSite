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
    listName: string,
    queryInfo: QueryInfo
  ): Promise<any[]> {
    //debugger;
    try {
      return pnp.sp.web.lists
        .getByTitle(listName)
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
        message: e.message + "-Library Name:" + listName,
        level: LogLevel.Error,
        data: data,
      };
      Logger.log(logEntry);
      return err;
    }
  }

  //Generic function for getting Item Details of a list
  public getItemDetails(
    listName: string,
    queryInfo: QueryInfo
  ): Promise<any[]> {
    try {
      //debugger;
      return pnp.sp.web.lists
        .getByTitle(listName)
        .items.select(queryInfo.selectString)
        .filter(queryInfo.filterString)
        .expand(queryInfo.expandString)
        .get()
        .then((result) => {
          return result;
        });
    } catch (e) {
      console.log("getItemDetails error - ", e);
      let err: any = [];
      //utilized in advanced logging
      let data: ILogData = {
        FileName: "SharePointDataProvider.ts",
        MethodName: "getItemDetails",
        Stack: e.stack ? e.stack : "",
      };
      let logEntry: ILogEntry = {
        message: e.message + "-Library Name:" + listName,
        level: LogLevel.Error,
        data: data,
      };
      Logger.log(logEntry);
      return err;
    }
  }

  //Generic function to add item to list
  public addItemToList(
    listname: string,
    item: any,
    MethodName: string,
    message: string
  ): Promise<any> {
    return pnp.sp.web.lists
      .getByTitle(listname)
      .items.add(item)
      .then((result) => {
        //utilized in advanced logging
        let data: ILogData = {
          FileName: "SharePointDataProvider.ts",
          MethodName: MethodName,
          Stack: "",
        };
        let logEntry: ILogEntry = {
          message: message,
          level: LogLevel.Error,
          data: data,
        };
        Logger.log(logEntry);
        return result;
      })
      .catch((e) => {
        console.log(e);

        //utilized in advanced logging
        let data: ILogData = {
          FileName: "SharePointDataProvider.ts",
          MethodName: MethodName,
          Stack: e.stack ? e.stack : "",
        };
        let logEntry: ILogEntry = {
          message: e.message + "-List:" + listname,
          level: LogLevel.Error,
          data: data,
        };
        Logger.log(logEntry);
        throw e;
      });
  }

  //This function to update the an entry in the list
  public updateItem(
    listname: string,
    caseData: any,
    itemId: number
  ): Promise<any> {
    try {
      return pnp.sp.web.lists
        .getByTitle(listname)
        .items.getById(itemId)
        .update(caseData)
        .then((result) => {
          return result;
        });
    } catch (e) {
      console.log("error - ", e);
      let err: any = [];
      //utilized in advanced logging
      let data: ILogData = {
        FileName: "SharePointDataProvider.ts",
        MethodName: "deleteItemFromList",
        Stack: e.stack ? e.stack : "",
      };
      let logEntry: ILogEntry = {
        message: e.message + "-ListName:" + listname,
        level: LogLevel.Error,
        data: data,
      };
      Logger.log(logEntry);
      return err;
    }
  }

  // This function helps to delete item froma specified list
  public deleteItemFromList(listname: string, id: string): Promise<void> {
    try {
      return pnp.sp.web.lists
        .getByTitle(listname)
        .items.getItemByStringId(id)
        .delete();
    } catch (e) {
      console.log("error - ", e);
      let err: any = [];
      //utilized in advanced logging
      let data: ILogData = {
        FileName: "SharePointDataProvider.ts",
        MethodName: "deleteItemFromList",
        Stack: e.stack ? e.stack : "",
      };
      let logEntry: ILogEntry = {
        message: e.message + "-ListName:" + listname,
        level: LogLevel.Error,
        data: data,
      };
      Logger.log(logEntry);
      return err;
    }
  }
}
