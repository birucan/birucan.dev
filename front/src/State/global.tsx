import { atom } from "recoil";
import IntroWindow from "../components/Applications/IntroWindow/IntroWindow";
import PDFDisplay from "../components/Applications/ResumeDisplay/ResumeDisplay";
import { WindowType, ValidTypeEnum, FileEnum } from "../types";
import FileExplorer from "../components/Applications/FileExplorer/FileExplorer";
export enum keyList {
  CURRENT_WINDOWS = "currentWindows",
}

export const currentWindowState = atom<WindowType[]>({
  key: keyList.CURRENT_WINDOWS,
  default: [
    {
      id: 2,
      type: ValidTypeEnum.EXECUTABLE,
      window: <FileExplorer currentFolder={[FileEnum.NEAT]} />,
      zIndex: 2,
      currentTop: false,
      icon: "icons/folderFilled.png",
      title: "Portafolio",
      minimized: false,
      initHeight: 200,
      initWidth: 200,
      initX: 100,
      initY: 520,
    },
    {
      id: 3,
      type: ValidTypeEnum.EXECUTABLE,
      window: <IntroWindow key={Math.random()} />,
      zIndex: 3,
      currentTop: true,
      icon: "icons/intro.png",
      title: "Intro",
      minimized: false,
      initHeight: 440,
      initWidth: 250,
      initX: 70,
      initY: 68,
    },
    {
      id: 1,
      type: ValidTypeEnum.PDF,
      window: (
        <PDFDisplay
          pdf="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf"
          key={Math.random()}
        />
      ),
      zIndex: 1,
      currentTop: false,
      title: "PDF Viewer",
      icon: "icons/textFile.png",
      minimized: false,
      initHeight: 800,
      initWidth: 700,
      initX: 340,
      initY: 50,
    },
  ],
});
