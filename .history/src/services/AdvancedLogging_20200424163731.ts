import { LogLevel, ILogListener, ILogEntry } from "@pnp/logging";
import { Web } from "sp-pnp-js";

export interface ILogData {
  FileName: string;
  MethodName: string;
  Stack: string;
}

export class LogData implements ILogData {
  constructor(
    public FileName: string = "",
    public MethodName: string = "",
    public Stack: string = ""
  ) {}
}

export interface ILogItem {
  ApplicationName: string;
  CodeFileName: string;
  MethodName: string;
  LoggedOn: Date;
  LoggedById: number;
  ErrorMessage: string;
  Stack: string;
  LoggedBy: string;
  Title: string;
}

export class LogItem implements ILogItem {
  // Initialization of state and other valiables and constants
  constructor(
    public ApplicationName: string = "",
    public CodeFileName: string = "",
    public MethodName: string = "",
    public LoggedOn: Date = new Date(),
    public LoggedById: number = 0,
    public LoggedBy: string = "",
    public ErrorMessage: string = "",
    public Stack: string = "",
    public Title: string = ""
  ) {}
}

export default class AdvancedLoggingService implements ILogListener {
  private _applicationName: string;
  private _web: Web;
  private _logListName: string;
  private _userId: number;
  private _userName: string;
  private _writeLogFailed: boolean;

  // Initialization of state and other valiables and constants
  constructor(
    applicationName: string,
    logWebUrl: string,
    logListName: string,
    currentUser: string
  ) {
    //debugger;
    //Initialize
    try {
      this._writeLogFailed = false;
      this._applicationName = applicationName;
      this._logListName = logListName;
      this._web = new Web(logWebUrl);
      this.init(currentUser);
    } catch (err) {
      console.error(`Error initializing AdvancedLoggingService - ${err}`);
    }
  }
  //Initializes log data
  private async init(currentUser: string): Promise<void> {
    //Implement an asyncronous call to ensure the user is part of the web where the ApplicationLog list is and get their user id.
    try {
      //debugger;
      let userResult = await this._web.ensureUser(
        `i:0#.f|membership|${currentUser}`
      );
      this._userId = userResult.data.Id;
      this._userName = userResult.data.Title;
    } catch (err) {
      console.error(
        `Error initializing AdvancedLoggingService (init) - ${err}`
      );
    }
  }
  //Enters log to application error log list
  public log(entry: ILogEntry): void {
    try {
      //debugger;
      //If the entry is an error then log it to my Application Log table.  All other logging is handled by the console listener
      if (entry.level == LogLevel.Error) {
        if (!this._writeLogFailed) {
          //let stackArray = null;
          //if (entry.data.DealID && entry.data.DealID.length > 0)
          //  stackArray = JSON.stringify(entry.data.DealID.split('\n').map((line) => { return line.trim(); }));
          let newLogItem: LogItem = new LogItem(
            this._applicationName,
            entry.data.FileName,
            entry.data.MethodName,
            new Date(),
            this._userId,
            this._userName,
            entry.message ? entry.message : "error occured",
            entry.data.Stack ? entry.data.Stack : "Cannot find stack trace",
            "Error Log"
          );
          let newLogItemResult = this._web.lists
            .getByTitle(this._logListName)
            .items.add(newLogItem);
        }
      }
    } catch (err) {
      //Assume writing to SharePoint list failed and stop continuous writing
      this._writeLogFailed = true;
      console.error(
        `Error logging error to SharePoint list ${this._logListName} - ${err}`
      );
    }
    return;
  }
}
