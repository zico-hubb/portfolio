export default function FullstackProjects() {
  return (
    <div style={{ padding: "2rem", color: "#f0f0f0", background: "#0a0a0a", minHeight: "100vh" }}>
      <h1 style={{ color: "#00ffaa" }}>🌐 Fullstack Applications</h1>
      <p>Here are my complete web applications built using the MERN stack, Flask, and Next.js — integrating both frontend and backend systems.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>🏥 Aminika Health Services</h2>
        <p>A full-stack medical management system that connects patients to verified doctors and health records. Built with Flask (backend) and React (frontend), featuring JWT authentication and cloud-hosted APIs.
            GitHub repo: https://github.com/zico-hubb/aminika-health-services
        </p>

        <h2>📖 BibleFinder App</h2>
        <p>A spiritual web application allowing users to search and read Bible passages easily. Built using JavaScript and Flask, featuring a clean UI and optimized scripture lookup functionality.
            GitHub repo: https://github.com/zico-hubb/bible-search
        </p>
      </section>
    </div>
  );
}
