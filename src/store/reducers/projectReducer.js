const initState = {
  projects: [
    { id: "1", title: "title1", content: "blah blah" },
    { id: "2", title: "title2", content: "blah blah" },
    { id: "3", title: "title3", content: "blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
