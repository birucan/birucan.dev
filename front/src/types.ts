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
  zIndex: number;
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
  root = "root",
  desktop = "desktop",
  Intro = "Intro",
  Pictures = "Pictures",
  PasswordCheck = "PasswordCheck",
  SecretPictures = "SecretPictures",
  testFolder2 = "testFolder2",
  testFolder = "testFolder",
  ImALoop = "ImALoop",
  Portafolio = "Portafolio",
  TestApp = "TestApp",
  Resume = "Resume",
  //pics
  brooklyn = "brooklyn",
  cat = "cat",
  cat2 = "cat2",
  catan = "catan",
  linkedin = "linkedin",
  paella = "paella",
  spooki = "spooki",
  //projects
  NEAT = "NEAT",
  smwAgent = "smwAgent",
  birucancc = "birucancc",
  threejs = "threejs",
  rusty = "rusty",
}
