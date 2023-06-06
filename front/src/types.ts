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
  testFolder2,
  testFolder,
  ImALoop,
  Demos,
  TestApp,
  Resume,
}
