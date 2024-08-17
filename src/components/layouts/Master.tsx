import { Footer } from "../paritials/Footer/Footer"
import { Header } from "../paritials/Header/Header"

import {GoTopButton} from "../vendors/Buttons/GoTopButton.tsx";

export const Master = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <Header />
            <section className="container mx-auto w-full mt-12">
                {children}
            </section>
            <GoTopButton/>
            <Footer />
        </>
    );
}