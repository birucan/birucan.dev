import { WindowType, ValidTypeEnum, FileEnum } from "../../../types";
import { currentWindowState } from "../../../State/global";
import IntroWindow from "../IntroWindow/IntroWindow";
import { getRecoil, setRecoil } from "recoil-nexus";
import PDFDisplay from "../ResumeDisplay/ResumeDisplay";
import TestApp from "../TestApp/TestApp";
import FileExplorer from "../FileExplorer/FileExplorer";
import PasswordCheck from "../PasswordCheck/PasswordCheck";
import PictureView from "../PictureView/PictureView";
import ProjectView from "../ProjectView/ProjectView";

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
      FileEnum.Portafolio,
      FileEnum.testFolder2,
      FileEnum.Resume,
      FileEnum.Pictures,
      FileEnum.TestApp,
    ],
  },
  [FileEnum.Pictures]: {
    title: "Pictures",
    type: ValidTypeEnum.FOLDER,
    icon: "icons/camera.png",
    dir: [
      FileEnum.linkedin,
      FileEnum.paella,
      FileEnum.cat,
      FileEnum.cat2,
      FileEnum.catan,
      FileEnum.brooklyn,
      FileEnum.PasswordCheck,
    ],
    initHeight: 225,
    initWidth: 200,
  },
  [FileEnum.PasswordCheck]: {
    title: "SecretPictures",
    type: ValidTypeEnum.EXECUTABLE,
    icon: "icons/padlock.png",
    window: <PasswordCheck file={FileEnum.SecretPictures} />,
    minimized: false,
    initHeight: 200,
    initWidth: 200,
    initX: 20,
    initY: 20,
    dir: [FileEnum.SecretPictures],
  },
  [FileEnum.SecretPictures]: {
    title: "SecretPictures",
    type: ValidTypeEnum.FOLDER,
    icon: "icons/camera.png",
    dir: [FileEnum.spooki],
  },
  [FileEnum.testFolder]: {
    title: "Folder1",
    type: ValidTypeEnum.FOLDER,
    icon: "icons/folder.png",
    dir: [FileEnum.ImALoop],
  },
  [FileEnum.ImALoop]: {
    title: "ImALoop",
    type: ValidTypeEnum.FOLDER,
    icon: "icons/folder.png",
    dir: [FileEnum.testFolder],
  },
  [FileEnum.testFolder2]: {
    title: "Folder2",
    type: ValidTypeEnum.FOLDER,
    icon: "icons/folder.png",
    dir: [FileEnum.Resume, FileEnum.testFolder],
  },
  [FileEnum.Portafolio]: {
    title: "Portafolio",
    icon: "icons/folderFilled.png",

    type: ValidTypeEnum.FOLDER,
    dir: [FileEnum.NEAT],
  },
  //files
  [FileEnum.Intro]: {
    type: ValidTypeEnum.EXECUTABLE,
    currentTop: false,
    window: <IntroWindow />,
    icon: "icons/intro.png",
    title: "Intro",
    minimized: false,
    initHeight: 440,
    initWidth: 250,
    initX: 20,
    initY: 20,
  },

  [FileEnum.TestApp]: {
    type: ValidTypeEnum.EXECUTABLE,
    window: <TestApp />,
    currentTop: false,
    icon: "icons/cowboy.png",
    title: "Serious Test",
    minimized: false,
    initHeight: 225,
    initWidth: 200,
    initX: 20,
    initY: 20,
  },
  [FileEnum.Resume]: {
    type: ValidTypeEnum.PDF,
    window: (
      <PDFDisplay pdf="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf" />
    ),
    currentTop: false,
    icon: "icons/textFile.png",
    title: "Resume",
    minimized: false,
    initHeight: 800,
    initWidth: 700,
    initX: 20,
    initY: 20,
  },
  [FileEnum.NEAT]: {
    type: ValidTypeEnum.PDF,
    window: (
      <ProjectView
        images={[
          "https://s3.amazonaws.com/birucan.dev/gallery/projects/NEAT1.PNG",
          "https://s3.amazonaws.com/birucan.dev/gallery/projects/NEAT2.jpg",
        ]}
        title="NEAT Python"
        text="OOP Python implementation created based on a Java implementation, created as as a part of my final senior project, includes a debug GUI that displays the current neural net generated and let the user add nodes, connections and mutations"
        hasSourceCode
        sourceCode="https://github.com/birucan/NEAT_py"
        isHosted={false}
      />
    ),
    currentTop: false,
    icon: "icons/python.png",
    title: "NEAT Python",
    minimized: false,
    initHeight: 500,
    initWidth: 700,
    initX: 20,
    initY: 20,
  },

  //pics
  [FileEnum.brooklyn]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/brooklyn.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "brooklyn.jpg",
    minimized: false,
    initHeight: 468,
    initWidth: 262,
    initX: 20,
    initY: 20,
  },
  [FileEnum.cat]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/cat.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "cat.jpg",
    minimized: false,
    initHeight: 370,
    initWidth: 600,
    initX: 20,
    initY: 20,
  },
  [FileEnum.cat2]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/cat2.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "cat2.jpg",
    minimized: false,
    initHeight: 480,
    initWidth: 353,
    initX: 20,
    initY: 20,
  },
  [FileEnum.linkedin]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/lnkinPP.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "linkedin.jpg",
    minimized: false,
    initHeight: 400,
    initWidth: 400,
    initX: 20,
    initY: 20,
  },
  [FileEnum.paella]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/paella.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "paella.jpg",
    minimized: false,
    initHeight: 468,
    initWidth: 263,
    initX: 20,
    initY: 20,
  },
  [FileEnum.catan]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/catan.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "catan.jpg",
    minimized: false,
    initHeight: 416,
    initWidth: 312,
    initX: 20,
    initY: 20,
  },
  [FileEnum.spooki]: {
    type: ValidTypeEnum.JPG,
    window: (
      <PictureView src="https://s3.amazonaws.com/birucan.dev/gallery/spooki.jpg" />
    ),
    currentTop: false,
    icon: "icons/image.png",
    title: "spooki.jpg",
    minimized: false,
    initHeight: 560,
    initWidth: 312,
    initX: 20,
    initY: 20,
  },
};

export const getFile = (key: keyof typeof FileEnum): Partial<WindowType> => {
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
      title: file.title ? file.title : "File Explorer",
      window: <FileExplorer currentFolder={file.dir ? file.dir : undefined} />,
      id: currWind.length + 1,
      zIndex: currWind.length + 1,
      currentTop: true,
      initHeight: file.initHeight ? file.initHeight : 200,
      initWidth: file.initWidth ? file.initWidth : 200,
      initX: 20 + Math.random() * 20,
      initY: 20 + Math.random() * 20,
      minimized: false,
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
