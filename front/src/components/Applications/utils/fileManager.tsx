import { WindowType, ValidTypeEnum, FileEnum } from "../../../types";
import { currentWindowState } from "../../../State/global";
import IntroWindow from "../IntroWindow/IntroWindow";
import { getRecoil, setRecoil } from "recoil-nexus";
import PDFDisplay from "../ResumeDisplay/ResumeDisplay";
import TestApp from "../TestApp/TestApp";
import FileExplorer from "../FileExplorer/FileExplorer";

export const fileMap = {
  //folders

  [FileEnum.root]: {
    type: ValidTypeEnum.FOLDER,
    dir: [FileEnum.desktop],
  },
  [FileEnum.desktop]: {
    type: ValidTypeEnum.FOLDER,
    icon: "icons/desktop.png",
    dir: [
      FileEnum.Intro,
      FileEnum.Demos,
      FileEnum.testFolder2,
      FileEnum.Resume,
      FileEnum.TestApp,
    ],
  },
  [FileEnum.testFolder]: {
    title: "Folder1",
    type: ValidTypeEnum.FOLDER,
    dir: [FileEnum.ImALoop],
  },
  [FileEnum.ImALoop]: {
    title: "ImALoop",
    type: ValidTypeEnum.FOLDER,
    dir: [FileEnum.testFolder],
  },
  [FileEnum.testFolder2]: {
    title: "Folder2",
    type: ValidTypeEnum.FOLDER,
    dir: [FileEnum.Resume, FileEnum.testFolder],
  },
  [FileEnum.Demos]: {
    title: "Demos",
    type: ValidTypeEnum.FOLDER,
    dir: [],
  },
  //files
  [FileEnum.Intro]: {
    type: ValidTypeEnum.EXECUTABLE,
    currentTop: false,
    window: <IntroWindow />,
    icon: "icons/intro.png",
    title: "Intro",
    minimized: false,
    initHeight: 200,
    initWidth: 200,
    initX: 20,
    initY: 20,
  },

  [FileEnum.TestApp]: {
    type: ValidTypeEnum.EXECUTABLE,
    window: <TestApp />,
    /*zIndex:1,*/ currentTop: false,
    icon: "icons/cowboy.png",
    title: "Serious Test",
    minimized: false,
    initHeight: 200,
    initWidth: 200,
    initX: 20,
    initY: 20,
  },
  [FileEnum.Resume]: {
    type: ValidTypeEnum.PDF,
    window: (
      <PDFDisplay pdf="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf" />
    ),
    /*zIndex:1,*/ currentTop: false,
    icon: "icons/textFile.png",
    title: "Resume",
    minimized: false,
    initHeight: 800,
    initWidth: 700,
    initX: 20,
    initY: 20,
  },
};

//files

export const initMap = () => {
  console.log("todo");
};

export const getFile = (key: FileEnum): Partial<WindowType> => {
  return fileMap[key];
};
export const openFile = (file: Partial<WindowType>): void => {
  const currWind = getRecoil(currentWindowState);
  if (file.type === ValidTypeEnum.FOLDER) {
    const newWindowState = currWind.map((window) => {
      return {
        ...window,
        zIndex: window.zIndex ? window.zIndex : currWind.length,
        minimized: false,
        currentTop: false,
      };
    });
    const newFile = {
      ...file,
      title: "File Explorer",
      window: <FileExplorer currentFolder={file.dir ? file.dir : undefined} />,
      id: currWind.length + 1,
      zIndex: currWind.length + 1,
      currentTop: true,
      initHeight: 200,
      initWidth: 200,
      initX: 20 + Math.random() * 20,
      initY: 20 + Math.random() * 20,
      minimized: false,
      icon: file.icon ? file.icon : "icons/folder.png",
    };
    setRecoil(currentWindowState, [...newWindowState, newFile as WindowType]);
  } else {
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
  }
};
