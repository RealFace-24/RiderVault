import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="panel" data-testid="not-found">
            <h2>Page not found</h2>
            <p className="info">We couldn't find the page you were looking for.</p>
            <Link to="/">Back to gear</Link>
        </section>
    );
}
