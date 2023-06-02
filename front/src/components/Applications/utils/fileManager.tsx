import { WindowType, validTypesEnum } from "../../../types";
import { currentWindowState } from "../../../State/global";
import IntroWindow from "../IntroWindow/IntroWindow";
import { getRecoil, setRecoil } from "recoil-nexus";
import PDFDisplay from "../ResumeDisplay/ResumeDisplay";
import TestApp from "../TestApp/TestApp";

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
  window: <TestApp />,
  /*zIndex:1,*/ currentTop: false,
  icon: "icons/cowboy.png",
  title: "SuperSeriousTest.com",
  minimized: false,
  initHeight: 200,
  initWidth: 200,
  initX: 20,
  initY: 20,
}),
  fileMap.set("Resume", {
    type: validTypesEnum.PDF,
    id: 1,
    dir: "../Applications/TestApp/TestApp",
    window: (
      <PDFDisplay pdf="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf" />
    ),
    /*zIndex:1,*/ currentTop: false,
    icon: "icons/textFile.png",
    title: "PDF Viewer",
    minimized: false,
    initHeight: 800,
    initWidth: 700,
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
  const newWindowState = currWind.map((window) => {
    return {
      ...window,
      id: window.id,
      window: window.window,
      zIndex: window.zIndex ? window.zIndex : currWind.length,
      minimized: false,
      currentTop: false,
    };
  });
  const newFile = {
    ...file,
    id: currWind.length + 1,
    zIndex: currWind.length + 1,
    currentTop: true,
  };
  setRecoil(currentWindowState, [...newWindowState, newFile as WindowType]);
};
