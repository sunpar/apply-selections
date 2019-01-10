export default qlik => {
  return [
    "$scope",
    "$element",
    function($scope, $element) {
      const app = qlik.currApp();
      const layout = $scope.layout;
      //get all the "on open" actions
      const onopen = Object.values(layout.onopen).filter(
        action => action.type !== "none"
      );
      //get all the "on click" actions
      const onclick = Object.values(layout.onclick).filter(
        action => action.type !== "none"
      );

      //if there are on open actions, perform said actions
      onopen.forEach(action => {
        if (action.type === "bookmark") {
          app.bookmark.apply(action.bookmarkName);
        }
      });
    }
  ];
};
