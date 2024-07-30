import { ILayout } from "../../interfaces/ILayout"

export const Master = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            {/* <Header /> */}

            {children}

            {/* <Footer /> */}
        </>
    )
}