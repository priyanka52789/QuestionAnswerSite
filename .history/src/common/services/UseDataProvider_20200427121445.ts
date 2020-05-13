import * as React from "react";

const useDataProvider = () => {
  const [items, setItems] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState({
    isLoading: false,
    loaderMsg: null,
  });

  return {
    items: items,
    showLoader: showLoader,
  };
};

export default useDataProvider;
