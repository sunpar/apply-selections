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
        actionvalue: {
          ref: "onclick.action1.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onclick.action1.type !== "none"
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
        actionvalue: {
          ref: "onclick.action2.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onclick.action2.type !== "none"
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
        actionvalue: {
          ref: "onclick.action3.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onclick.action3.type !== "none"
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
          options: actionTypeDropdown,
          show: data => data.onclick.action4.type !== "none"
        },
        actionvalue: {
          ref: "onclick.action4.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown,
          show: data => data.onclick.action5.type !== "none"
        },
        actionvalue: {
          ref: "onclick.action5.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown,
          show: data => data.onclick.action6.type !== "none"
        },
        actionvalue: {
          ref: "onclick.action6.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown,
          show: data => data.onclick.action7.type !== "none"
        },
        actionvalue: {
          ref: "onclick.action7.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown,
          show: data => data.onclick.action8.type !== "none"
        },
        actionvalue: {
          ref: "onclick.action8.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown,
          show: data => data.onclick.action9.type !== "none"
        },
        actionvalue: {
          ref: "onclick.action9.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          label: "Field or Variable Name",
          type: "string",
          expression: "optional",
          show: data =>
            ["none", "bookmark"].indexOf(data.onopen.action1.type) === -1
        },
        actionvalue: {
          ref: "onopen.action1.value",
          label: "Selection or Variable Value",
          type: "string",
          expression: "optional",
          show: data =>
            ["none", "bookmark", "clear"].indexOf(data.onopen.action1.type) ===
            -1
        },
        bookmarks: {
          type: "string",
          component: "dropdown",
          label: "Bookmark Name",
          ref: "onopen.action1.bookmarkName",
          defaultValue: "",
          options: () => {
            return actionTypeDropdown;
          },
          show: data => data.onopen.action1.type === "bookmark"
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
        actionvalue: {
          ref: "onopen.action2.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action2.type !== "none"
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
        actionvalue: {
          ref: "onopen.action3.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action3.type !== "none"
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
        actionvalue: {
          ref: "onopen.action4.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action4.type !== "none"
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
        actionvalue: {
          ref: "onopen.action5.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action5.type !== "none"
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
        actionvalue: {
          ref: "onopen.action6.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action6.type !== "none"
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
        actionvalue: {
          ref: "onopen.action7.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action7.type !== "none"
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
        actionvalue: {
          ref: "onopen.action8.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action8.type !== "none"
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
        actionvalue: {
          ref: "onopen.action9.value",
          label: "Action Value",
          type: "string",
          expression: "optional",
          show: data => data.onopen.action9.type !== "none"
        }
      }
    }
  }
};

// export default {
//   type: "items",
//   component: "accordion",
//   items: {
//     onClick: onClick,
//     onOpen: onOpen
//   }
// };

export default qlik => {
  const app = qlik.currApp();
  let bookmarkList = actionTypeDropdown;
  app.getList("BookmarkList", list => {
    bookmarkList = list.qBookmarkList.qItems.map(function(item) {
      return {
        value: item.qInfo.qId,
        label: item.qData.title
      };
    });
  });
  console.log(bookmarkList);

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
          actionvalue: {
            ref: "onclick.action1.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onclick.action1.type !== "none"
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
          actionvalue: {
            ref: "onclick.action2.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onclick.action2.type !== "none"
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
          actionvalue: {
            ref: "onclick.action3.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onclick.action3.type !== "none"
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
            options: actionTypeDropdown,
            show: data => data.onclick.action4.type !== "none"
          },
          actionvalue: {
            ref: "onclick.action4.value",
            label: "Action Value",
            type: "string",
            expression: "optional"
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
            options: actionTypeDropdown,
            show: data => data.onclick.action5.type !== "none"
          },
          actionvalue: {
            ref: "onclick.action5.value",
            label: "Action Value",
            type: "string",
            expression: "optional"
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
            options: actionTypeDropdown,
            show: data => data.onclick.action6.type !== "none"
          },
          actionvalue: {
            ref: "onclick.action6.value",
            label: "Action Value",
            type: "string",
            expression: "optional"
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
            options: actionTypeDropdown,
            show: data => data.onclick.action7.type !== "none"
          },
          actionvalue: {
            ref: "onclick.action7.value",
            label: "Action Value",
            type: "string",
            expression: "optional"
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
            options: actionTypeDropdown,
            show: data => data.onclick.action8.type !== "none"
          },
          actionvalue: {
            ref: "onclick.action8.value",
            label: "Action Value",
            type: "string",
            expression: "optional"
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
            options: actionTypeDropdown,
            show: data => data.onclick.action9.type !== "none"
          },
          actionvalue: {
            ref: "onclick.action9.value",
            label: "Action Value",
            type: "string",
            expression: "optional"
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
            label: "Field or Variable Name",
            type: "string",
            expression: "optional",
            show: data =>
              ["none", "bookmark"].indexOf(data.onopen.action1.type) === -1
          },
          actionvalue: {
            ref: "onopen.action1.value",
            label: "Selection or Variable Value",
            type: "string",
            expression: "optional",
            show: data =>
              ["none", "bookmark", "clear"].indexOf(
                data.onopen.action1.type
              ) === -1
          },
          bookmarks: {
            type: "string",
            component: "dropdown",
            label: "Bookmark Name",
            ref: "onopen.action1.bookmarkName",
            defaultValue: "",
            options: () => {
              console.log(bookmarkList);
              return bookmarkList;
            },
            show: data => data.onopen.action1.type === "bookmark"
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
          actionvalue: {
            ref: "onopen.action2.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action2.type !== "none"
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
          actionvalue: {
            ref: "onopen.action3.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action3.type !== "none"
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
          actionvalue: {
            ref: "onopen.action4.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action4.type !== "none"
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
          actionvalue: {
            ref: "onopen.action5.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action5.type !== "none"
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
          actionvalue: {
            ref: "onopen.action6.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action6.type !== "none"
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
          actionvalue: {
            ref: "onopen.action7.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action7.type !== "none"
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
          actionvalue: {
            ref: "onopen.action8.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action8.type !== "none"
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
          actionvalue: {
            ref: "onopen.action9.value",
            label: "Action Value",
            type: "string",
            expression: "optional",
            show: data => data.onopen.action9.type !== "none"
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
