import { ReactElement } from "react";
import { JsxElement } from "typescript";

export enum ValidTypeEnum {
  EXECUTABLE = ".exe",
  JPG = ".jpg",
  PNG = ".png",
  PDF = ".pdf",
  FOLDER = "",
  other = "",
}

export type WindowType = {
  type: ValidTypeEnum;
  window: ReactElement;
  id: number;
  zIndex?: number;
  dir?: FileEnum[];
  currentTop: boolean;
  icon: string;
  title: string;
  minimized: boolean;
  initHeight: number;
  initWidth: number;
  initX: number;
  initY: number;
};
export enum FileEnum {
  root,
  desktop,
  Intro,
  Pictures,
  PasswordCheck,
  SecretPictures,
  testFolder2,
  testFolder,
  ImALoop,
  Portafolio,
  TestApp,
  Resume,
  //pics
  brooklyn,
  cat,
  cat2,
  catan,
  linkedin,
  paella,
  spooki,
}
