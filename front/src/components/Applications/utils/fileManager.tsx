import { WindowType, validTypesEnum } from "../../../types";
import { currentWindowState } from "../../../State/global";
import IntroWindow from "../IntroWindow/IntroWindow";
import { getRecoil, setRecoil } from "recoil-nexus";

export const fileMap = new Map<string, Partial<WindowType>>();
//folders
fileMap.set("root", { type: validTypesEnum.FOLDER, icon: "default" });
fileMap.set("desktop", {
  type: validTypesEnum.FOLDER,
  icon: "icons/desktop.png",
});
fileMap.set("testFolder", { type: validTypesEnum.FOLDER, icon: "default" });
fileMap.set("testFolder2", { type: validTypesEnum.FOLDER, icon: "default" });
fileMap.set("Demos", { type: validTypesEnum.FOLDER, icon: "default" });
//files
fileMap.set("Intro", {
  type: validTypesEnum.EXECUTABLE,
  id: 1,
  dir: "../Applications/IntroWindow/IntroWindow",
  currentTop: false,
  window: <IntroWindow />,
  icon: "icons/intro.png",
  title: "Intro",
  minimized: false,
  initHeight: 200,
  initWidth: 200,
  initX: 20,
  initY: 20,
});
fileMap.set("TestApp", {
  type: validTypesEnum.EXECUTABLE,
  id: 1,
  dir: "../Applications/TestApp/TestApp",
  window: <IntroWindow />,
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

export const getFile = (key: string) => {
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

export const openFile = (file: Partial<WindowType>) => {
  const currWind = getRecoil(currentWindowState);

  setRecoil(currentWindowState, [...currWind, file as WindowType]);
};
