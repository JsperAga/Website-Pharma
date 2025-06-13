import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! We couldn't find the page you're looking for.</p>

      <Link 
        href="/" 
        className="btn-home" 
        // you can add aria-label, title, etc.
      >
        ← Back to Home
      </Link>
    </div>
  );
}
