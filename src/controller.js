export default qlik => {
  return [
    "$scope",
    "$element",
    function ($scope, $element) {
      const app = qlik.currApp();
      const layout = $scope.layout;

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
            app.bookmark.apply(action.drop);
            break;
          case "selection":
            app.field(action.name).selectMatch(action.value, false, true);
            break;
          case "multiple":
            const vals = splitToStringNum(action.value, ';');
            app.field(action.name).selectValues(vals, false);
            break;
          case "clear":
            app.field(action.name).clear();
            break;
          case "variable":
            app.variable.setStringValue(action.drop, action.value);
            break;
          case "clearall":
            app.clearAll();
            break;
          default:
            console.error("Action not identified by Apply Selections extension: ", action);
            break;
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

      //function to do the open actions on button click
      $scope.doOpenActions = () => {
        OpenActions.forEach(action => {
          doAction(action);
        });
      };

      //function to do the click actions on button click
      $scope.doClickActions = () => {
        ClickActions.forEach(action => {
          doAction(action);
        });
      };

      $scope.buttonName = layout.buttonName === "" ? "Apply" : layout.buttonName;

      //if there are on open actions, perform said actions once
      $scope.doOpenActions();
    }
  ];
};
