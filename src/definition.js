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

  const onClick = {
    label: "On Click Actions",
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
            ref: "onclick.action1.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action1.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action1.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action1.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action1.drop",
            options: data =>
              data.onclick.action1.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action1.type) !== -1
          },
          actionValue: {
            ref: "onclick.action1.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action1.type
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
            ref: "onclick.action2.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action2.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action2.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action2.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action2.drop",
            options: data =>
              data.onclick.action2.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action2.type) !== -1
          },
          actionValue: {
            ref: "onclick.action2.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action2.type
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
            ref: "onclick.action3.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action3.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action3.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action3.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action3.drop",
            options: data =>
              data.onclick.action3.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action3.type) !== -1
          },
          actionValue: {
            ref: "onclick.action3.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action3.type
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
            ref: "onclick.action4.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action4.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action4.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action4.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action4.drop",
            options: data =>
              data.onclick.action4.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action4.type) !== -1
          },
          actionValue: {
            ref: "onclick.action4.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action4.type
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
            ref: "onclick.action5.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action5.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action5.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action5.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action5.drop",
            options: data =>
              data.onclick.action5.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action5.type) !== -1
          },
          actionValue: {
            ref: "onclick.action5.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action5.type
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
            ref: "onclick.action6.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action6.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action6.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action6.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action6.drop",
            options: data =>
              data.onclick.action6.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action6.type) !== -1
          },
          actionValue: {
            ref: "onclick.action6.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action6.type
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
            ref: "onclick.action7.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action7.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action7.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action7.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action7.drop",
            options: data =>
              data.onclick.action7.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action7.type) !== -1
          },
          actionValue: {
            ref: "onclick.action7.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action7.type
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
            ref: "onclick.action8.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action8.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action8.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action8.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action8.drop",
            options: data =>
              data.onclick.action8.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action8.type) !== -1
          },
          actionValue: {
            ref: "onclick.action8.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action8.type
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
            ref: "onclick.action9.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onclick.action9.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onclick.action9.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onclick.action9.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onclick.action9.drop",
            options: data =>
              data.onclick.action9.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onclick.action9.type) !== -1
          },
          actionValue: {
            ref: "onclick.action9.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onclick.action9.type
              ) !== -1
          }
        }
      }
    }
  };

  const onOpen = {
    label: "On Open Actions",
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
            ref: "onopen.action1.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action1.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action1.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action1.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action1.drop",
            options: data =>
              data.onopen.action1.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action1.type) !== -1
          },
          actionValue: {
            ref: "onopen.action1.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action1.type
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
            ref: "onopen.action2.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action2.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action2.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action2.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action2.drop",
            options: data =>
              data.onopen.action2.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action2.type) !== -1
          },
          actionValue: {
            ref: "onopen.action2.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action2.type
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
            ref: "onopen.action3.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action3.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action3.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action3.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action3.drop",
            options: data =>
              data.onopen.action3.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action3.type) !== -1
          },
          actionValue: {
            ref: "onopen.action3.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action3.type
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
            ref: "onopen.action4.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action4.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action4.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action4.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action4.drop",
            options: data =>
              data.onopen.action4.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action4.type) !== -1
          },
          actionValue: {
            ref: "onopen.action4.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action4.type
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
            ref: "onopen.action5.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action5.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action5.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action5.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action5.drop",
            options: data =>
              data.onopen.action5.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action5.type) !== -1
          },
          actionValue: {
            ref: "onopen.action5.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action5.type
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
            ref: "onopen.action6.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action6.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action6.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action6.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action6.drop",
            options: data =>
              data.onopen.action6.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action6.type) !== -1
          },
          actionValue: {
            ref: "onopen.action6.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action6.type
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
            ref: "onopen.action7.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action7.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action7.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action7.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action7.drop",
            options: data =>
              data.onopen.action7.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action7.type) !== -1
          },
          actionValue: {
            ref: "onopen.action7.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action7.type
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
            ref: "onopen.action8.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action8.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action8.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action8.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action8.drop",
            options: data =>
              data.onopen.action8.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action8.type) !== -1
          },
          actionValue: {
            ref: "onopen.action8.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action8.type
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
            ref: "onopen.action9.type",
            defaultValue: "none",
            options: actionTypeDropdown
          },
          actionName: {
            ref: "onopen.action9.name",
            label: "Field Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["clear","selection"].indexOf(data.onopen.action9.type) !== -1
          },
          actionDrop: {
            type: "string",
            component: "dropdown",
            label: (data) =>
              data.onopen.action9.type === "bookmark"
                ? "Bookmark Name"
                : "Variable Name",
            ref: "onopen.action9.drop",
            options: data =>
              data.onopen.action9.type === "bookmark"
                ? bookmarkList
                : variableList,
            show: data =>
              ["bookmark", "variable"].indexOf(data.onopen.action9.type) !== -1
          },
          actionValue: {
            ref: "onopen.action9.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["selection", "variable"].indexOf(
                data.onopen.action9.type
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
      onClick: onClick,
      onOpen: onOpen
    }
  };
  return ret;
};
