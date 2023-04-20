export const fileMap = new Map();
//folders
fileMap.set("root", { type: "folder", icon: "default" });
fileMap.set("desktop", { type: "folder", icon: "icons/desktop.png" });
fileMap.set("testFolder", { type: "folder", icon: "default" });
fileMap.set("testFolder2", { type: "folder", icon: "default" });
//files
fileMap.set("Intro", {
  type: ".exe",
  id: 1,
  dir: "../Applications/IntroWindow/IntroWindow",
  /*zIndex:1,*/ currentTop: false,
  icon: "icons/intro.png",
  title: "Intro",
  minimized: false,
  initHeight: 200,
  initWidth: 200,
  initX: 20,
  initY: 20,
});
fileMap.set("TestApp", {
  type: ".exe",
  id: 1,
  dir: "../Applications/TestApp/TestApp",
  /*zIndex:1,*/ currentTop: false,
  icon: "icons/question.png",
  title: "Intro",
  minimized: false,
  initHeight: 200,
  initWidth: 200,
  initX: 20,
  initY: 20,
});

export const initMap = () => {
  console.log("todo");
};

export const getFile = (key) => {
  if (fileMap.has(key)) {
    return fileMap.get(key);
  } else {
    return {};
  }
};

export const createFile = (obj) => {
  return "key";
};

export const addFileToFolder = (fileKey, folderKey) => {
  console.log("todo");
};
