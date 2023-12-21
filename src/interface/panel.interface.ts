import React from "react";
import { ImageInterface } from "./image.interface";

export interface PanelInterface {
  reverse?: boolean;
  title: string;
  description: string;
  image: ImageInterface;
  children: React.ReactNode;
}
