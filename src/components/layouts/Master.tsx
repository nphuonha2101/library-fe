import { Footer } from "../paritials/Footer/Footer"
import { Header } from "../paritials/Header/Header"

import {GoTopButton} from "../vendors/Buttons/GoTopButton.tsx";
import {ILayout} from "../../interfaces/ILayout.ts";

export const Master: React.FC<ILayout> = ({ children }) => {
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