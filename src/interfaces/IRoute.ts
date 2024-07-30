import { ILayout } from "./ILayout"

export interface IRoute {
    path: string
    Component: React.ComponentType
    Layout: ILayout
}