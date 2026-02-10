import Header from "../components/Header";
import './PageNotFound.css'

function PageNotFound() {
    return (
        <>
            <title>Page Not Found</title>

            <Header />

            <div className="page-not-found-page">
                <div className="page-left">

                </div>
                <div className="page-right">
                    <h1>Oops!</h1>
                    <p>This page doesn't exist. Were you looking for something else?</p>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;