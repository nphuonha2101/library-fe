import { ILayout } from "../../interfaces/ILayout"

export const Master = ({ children }: { children?: ILayout }) => {
    return (
        <>
            {/* <Header /> */}

            {children}

            {/* <Footer /> */}
        </>
    )
}