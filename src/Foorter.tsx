export default function Footer() {
    return (
        <footer className="bd-footer py-5 mt-5 bg-dark text-light">
            <div className="container">
                <p>React Movies {new Date().getFullYear().toString()}</p>
            </div>
        </footer>
    )
}