import React from "react";
import {IApiResult} from "./IApiResult.ts";

export interface ICategory extends IApiResult{
    id: number;
    name: string;
    description?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}