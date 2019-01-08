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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onclick.action1.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onclick.action2.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onclick.action3.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown
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
          options: actionTypeDropdown
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
          options: actionTypeDropdown
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
          options: actionTypeDropdown
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
          options: actionTypeDropdown
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
          options: actionTypeDropdown
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
}

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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action1.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action2.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action3.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
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
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action4.value",
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
          ref: "onopen.action5.type",
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action5.value",
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
          ref: "onopen.action6.type",
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action6.value",
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
          ref: "onopen.action7.type",
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action7.value",
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
          ref: "onopen.action8.type",
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action8.value",
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
          ref: "onopen.action9.type",
          options: actionTypeDropdown
        },
        actionvalue: {
          ref: "onopen.action9.value",
          label: "Action Value",
          type: "string",
          expression: "optional"
        }
      }
    }
  }
}

export default {
  type: "items",
  component: "accordion",
  items: {
    onClick: onClick,
    onOpen: onOpen
  }
};
