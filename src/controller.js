export default qlik => {
  return [
    "$scope",
    "$element",
    function($scope, $element) {
      const app = qlik.currApp();
      const layout = $scope.layout;

      //function to take an action and act on it
      const doAction = action => {
        switch (action.type) {
          case "bookmark":
            app.bookmark.apply(action.drop);
            break;
          case "selection":
            app.field(action.name).toggleSelect(action.value);
            break;
          case "clear":
            app.field(action.name).clear();
            break;
          case "variable":
            app.variable.setStringValue(action.drop, action.value);
            break;
          default:
            break;
        }
      };

      //get all the "on open" actions
      const OpenActions = Object.values(layout.onopen).filter(
        action => action.type !== "none"
      );
      //get all the "on click" actions
      const ClickActions = Object.values(layout.onclick).filter(
        action => action.type !== "none"
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

      //if there are on open actions, perform said actions once
      $scope.doOpenActions();
    }
  ];
};
