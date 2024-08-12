import { Footer } from "../paritials/Footer/Footer"
import { Header } from "../paritials/Header/Header"

export const Master = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <Header />
            <section className="container mx-auto w-full mt-6">
                {children}
            </section>
            <Footer />
        </>
    );
}