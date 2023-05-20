import { ReactElement } from "react";
import { JsxElement } from "typescript";

export enum validTypesEnum {
  EXECUTABLE = ".exe",
  JPG = ".jpg",
  PNG = ".png",
  PDF = ".pdf",
  FOLDER = "",
  other = "",
}

export type WindowType = {
  type: validTypesEnum;
  window: ReactElement;
  id: number;
  zIndex?: number;
  dir?: string;
  currentTop: boolean;
  icon: string;
  title: string;
  minimized: boolean;
  initHeight: number;
  initWidth: number;
  initX: number;
  initY: number;
};

export type Folder = {
  type: validTypesEnum.FOLDER;
  window: ReactElement;
  id: number;
  zIndex?: number;
  dir?: string;
  currentTop: boolean;
  icon: string;
  title: string;
  minimized: boolean;
  initHeight: number;
  initWidth: number;
  initX: number;
  initY: number;
};
