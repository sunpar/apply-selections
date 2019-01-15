// options for action event type drop down
const actionEventDropdown = [
  {
    value: "open",
    label: "On Open"
  },
  {
    value: "click",
    label: "On Click"
  },
  {
    value: "both",
    label: "Both"
  }
]

// options for action type drop down
const actionTypeDropdown = [
  {
    value: "none",
    label: "[No Action]"
  },
  {
    value: "selection",
    label: "Apply Selection"
  },
  {
    value: "bookmark",
    label: "Apply Bookmark"
  },
  {
    value: "clear",
    label: "Clear Field"
  },
  {
    value: "variable",
    label: "Set Variable"
  }
];

// options for the first action 
const actionTypeDropdownClear = actionTypeDropdown.concat({
  value: "clearall",
  label: "Clear All"
});


export default qlik => {
  const app = qlik.currApp();

  // the bookmarkList should be a list of all the available bookmarks in the app
  let bookmarkList = actionTypeDropdown;
  app.getList("BookmarkList", list => {
    variableList = bookmarkList = list.qBookmarkList.qItems.map(function(item) {
      return {
        value: item.qInfo.qId,
        label: item.qData.title
      };
    });
  });

  // the variableList should be a list of all the avaiable variables in the app
  let variableList = actionTypeDropdown;
  app.getList("VariableList", list => {
    variableList = list.qVariableList.qItems.map(function(item) {
      return {
        value: item.qName,
        label: item.qName
      };
    });
  });

  const actions = {
    label: "Actions",
    component: "expandable-items",
    items: {
      action1: {
        type: "items",
        label: "Action 1",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action1.type",
            defaultValue: "none",
            options: actionTypeDropdownClear
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action1.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action1.event) === -1
          },
          actionName: {
            ref: "actions.action1.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action1.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action1.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action1.drop",
            options: data =>
              data.actions.action1.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action1.type) !== -1
          },
          actionValue: {
            ref: "actions.action1.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action1.type
              ) !== -1
          }
        }
      },
      action2: {
        type: "items",
        label: "Action 2",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action2.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action2.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action2.event) === -1
          },
          actionName: {
            ref: "actions.action2.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action2.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action2.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action2.drop",
            options: data =>
              data.actions.action2.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action2.type) !== -1
          },
          actionValue: {
            ref: "actions.action2.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action2.type
              ) !== -1
          }
        }
      },
      action3: {
        type: "items",
        label: "Action 3",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action3.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action3.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action3.event) === -1
          },
          actionName: {
            ref: "actions.action3.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action3.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action3.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action3.drop",
            options: data =>
              data.actions.action3.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action3.type) !== -1
          },
          actionValue: {
            ref: "actions.action3.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action3.type
              ) !== -1
          }
        }
      },
      action4: {
        type: "items",
        label: "Action 4",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action4.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action4.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action4.event) === -1
          },
          actionName: {
            ref: "actions.action4.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action4.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action4.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action4.drop",
            options: data =>
              data.actions.action4.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action4.type) !== -1
          },
          actionValue: {
            ref: "actions.action4.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action4.type
              ) !== -1
          }
        }
      },
      action5: {
        type: "items",
        label: "Action 5",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action5.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action5.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action5.event) === -1
          },
          actionName: {
            ref: "actions.action5.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action5.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action5.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action5.drop",
            options: data =>
              data.actions.action5.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action5.type) !== -1
          },
          actionValue: {
            ref: "actions.action5.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action5.type
              ) !== -1
          }
        }
      },
      action6: {
        type: "items",
        label: "Action 6",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action6.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action6.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action6.event) === -1
          },
          actionName: {
            ref: "actions.action6.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action6.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action6.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action6.drop",
            options: data =>
              data.actions.action6.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action6.type) !== -1
          },
          actionValue: {
            ref: "actions.action6.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action6.type
              ) !== -1
          }
        }
      },
      action7: {
        type: "items",
        label: "Action 7",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action7.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action7.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action7.event) === -1
          },
          actionName: {
            ref: "actions.action7.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action7.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action7.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action7.drop",
            options: data =>
              data.actions.action7.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action7.type) !== -1
          },
          actionValue: {
            ref: "actions.action7.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action7.type
              ) !== -1
          }
        }
      },
      action8: {
        type: "items",
        label: "Action 8",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action8.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action8.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action8.event) === -1
          },
          actionName: {
            ref: "actions.action8.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action8.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action8.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action8.drop",
            options: data =>
              data.actions.action8.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action8.type) !== -1
          },
          actionValue: {
            ref: "actions.action8.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action8.type
              ) !== -1
          }
        }
      },
      action9: {
        type: "items",
        label: "Action 9",
        items: {
          actiontype: {
            type: "string",
            component: "dropdown",
            label: "Action Type",
            ref: "actions.action9.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionevent: {
            type: "string",
            component: "dropdown",
            label: "Action Execution",
            ref: "actions.action9.event",
            defaultValue: "open",
            options: actionEventDropdown,
            show: data => ["none"].indexOf(data.actions.action9.event) === -1
          },
          actionName: {
            ref: "actions.action9.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.actions.action9.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.actions.action9.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "actions.action9.drop",
            options: data =>
              data.actions.action9.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.actions.action9.type) !== -1
          },
          actionValue: {
            ref: "actions.action9.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.actions.action9.type
              ) !== -1
          }
        }
      }
    }
  };

  

  const ret = {
    type: "items",
    component: "accordion",
    items: {
      appearance: {
        uses: "settings",
        items: {
          buttonBox: {
            ref: "buttonName",
            label: "Button Name",
            type: "string",
            defaultValue: "Apply",
          }
        }
      },
      actions: actions
    }
  };
  
  return ret;
};
