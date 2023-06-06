import { atom } from "recoil";
import IntroWindow from "../components/Applications/IntroWindow/IntroWindow";
import PDFDisplay from "../components/Applications/ResumeDisplay/ResumeDisplay";
import { WindowType, ValidTypeEnum } from "../types";
export enum keyList {
  CURRENT_WINDOWS = "currentWindows",
}

export const currentWindowState = atom<WindowType[]>({
  key: keyList.CURRENT_WINDOWS,
  default: [
    {
      id: 1,
      type: ValidTypeEnum.EXECUTABLE,
      window: <IntroWindow key={Math.random()} />,
      zIndex: 1,
      currentTop: false,
      icon: "icons/intro.png",
      title: "Intro",
      minimized: false,
      initHeight: 200,
      initWidth: 200,
      initX: 50,
      initY: 20,
    },
    {
      id: 2,
      type: ValidTypeEnum.PDF,
      window: (
        <PDFDisplay
          pdf="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf"
          key={Math.random()}
        />
      ),
      zIndex: 2,
      currentTop: true,
      title: "PDF Viewer",
      icon: "icons/textFile.png",
      minimized: false,
      initHeight: 800,
      initWidth: 700,
      initX: 300,
      initY: 50,
    },
  ],
});
