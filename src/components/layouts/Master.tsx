import {GoTopButton} from "../vendors/Buttons/GoTopButton.tsx";

export const Master = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            {/* <Header /> */}

            {children}
            <GoTopButton/>

            {/* <Footer /> */}
        </>
    )
}