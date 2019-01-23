export default qlik => {
  return [
    "$scope",
    "$element",
    function ($scope, $element) {
      const app = qlik.currApp();
      const layout = $scope.layout;
      console.log("in controller");
      // Helper function to split numbers.
      function splitToStringNum(str, sep) {
        const a = str.split(sep);
        for (let i = 0; i < a.length; i++) {
          if (!isNaN(a[i])) {
            a[i] = Number(a[i]);
          }
        }
        return a;
      }

      //function to take an action and act on it
      const doAction = action => {
        switch (action.type) {
          case "bookmark":
            return app.bookmark.apply(action.drop);
          case "selection":
            return app.field(action.name).selectMatch(action.value, false, true);
          case "multiple":
            const vals = splitToStringNum(action.value, ';');
            return app.field(action.name).selectValues(vals, false);
          case "clear":
            return app.field(action.name).clear();
          case "variable":
            return app.variable.setStringValue(action.drop, action.value);
          case "clearall":
            return app.clearAll();
          default:
            console.error("Action not identified by Apply Selections extension: ", action);
            return Promise.resolve();
        }
      };



      //get all the "on open" actions
      const OpenActions = Object.values(layout.actions).filter(
        action => action.type !== "none" && ['open', 'both'].indexOf(action.event) >= 0
      );
      //get all the "on click" actions
      const ClickActions = Object.values(layout.actions).filter(
        action => action.type !== "none" && ['click', 'both'].indexOf(action.event) >= 0
      );

      //function to do the open actions
      $scope.doOpenActions = () => {
        let chain = Promise.resolve();
        OpenActions.forEach(action => {
          chain = chain.then(() => doAction(action));
        });
        return chain;
      };

      //function to do the click actions 
      $scope.doClickActions = () => {
        let chain = Promise.resolve();
        ClickActions.forEach(action => {
          chain = chain.then(() => doAction(action));
        });
        return chain;
      };

      $scope.buttonName = layout.buttonName === "" ? "Apply" : layout.buttonName;

      //if the global open objs isn't there, instantiate it
      // if (!window.openObjs) window.openObjs = [];

      //if the current sheet is different from the global current sheet, then you can run onOpen actions
      //then change the global current sheet to the current sheetID
      const doOpen = window.currSheet !== qlik.navigation.getCurrentSheetId().sheetId;
      if(doOpen) {
        window.currSheet = qlik.navigation.getCurrentSheetId().sheetId;
        $scope.doOpenActions();
      }
      window.currSheet = qlik.navigation.getCurrentSheetId().sheetId;

      //if this is the first open of this object, add this object to the open objects and then execute onOpen actions
      $scope.backendApi.getProperties().then(function (reply) {
        if (window.openObjs.indexOf(reply.qInfo.qId) < 0) {
          window.openObjs.push(reply.qInfo.qId);
          $scope.doOpenActions();
        }
      });
      
    }
  ];
};
