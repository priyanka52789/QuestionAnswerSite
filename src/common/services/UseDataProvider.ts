import * as React from "react";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import { IItem, IItemAddResult, IItemUpdateResult } from "@pnp/sp/items";
import { IFileAddResult } from "@pnp/sp/files";
import { IMAGELIB } from "../Constants";

const useDataProvider = (props) => {
  const [items, setItems] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState({
    isLoading: false,
    loaderMsg: null,
  });
  const listName = props.listName;
  const createUniqueFileName = React.useCallback((name) => {
    let found = name.lastIndexOf(".");

    var todaysDate = new Date();
    var timeTick = todaysDate.getTime();
    let fileExtension = found > 0 ? name.substr(found) : "";
    //let oldName = employeePicture.name.replace(fileExtension, '');
    let newName = name.replace(fileExtension, "");
    newName = newName + "_" + timeTick + fileExtension;
    //return (found > 0 ? name.substr(found) : "");

    return newName;
  }, []);

  // const uploadImage = React.useCallback(
  //   (requestId: number, context: any, employeePicture: any): Promise<any> => {
  //     return new Promise((resolve, reject) => {
  //       if (employeePicture) {
  //         setShowLoader({
  //           isLoading: true,
  //           loaderMsg: "Uploading employee picture...",
  //         });
  //         let tempFileName = createUniqueFileName(employeePicture.name);
  //         let tempFileUrl = `${context.pageContext.web.absoluteUrl}/${listName}/${tempFileName}`;

  //         sp.web
  //           .getFolderByServerRelativeUrl(
  //             `${context.pageContext.web.serverRelativeUrl}/${listName}`
  //           )
  //           .files.add(tempFileName, employeePicture, true)
  //           .then((file: IFileAddResult) => {
  //             //console.log(file);
  //             file.file.getItem().then((item: IItem) => {
  //               item
  //                 .update({
  //                   RequestId: requestId,
  //                 })
  //                 .then((updatedItem: IItemUpdateResult) => {
  //                   resolve({
  //                     Description: "Picture URL",
  //                     Url: tempFileUrl,
  //                   });
  //                 });
  //             });
  //           });
  //       } else {
  //         resolve(null);
  //       }
  //     });
  //   },
  //   []
  // );

  return {
    items: items,
    showLoader: showLoader,
  };
};

export default useDataProvider;
