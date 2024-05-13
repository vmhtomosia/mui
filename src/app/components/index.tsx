import Footer from "./layout/footer"
import Header from "./layout/header"
export default function Layout({children} : {children : React.ReactNode}){
    return <>
            <Header />
                {children}
            <Footer />
    </>
}