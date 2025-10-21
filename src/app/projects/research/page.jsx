export default function ResearchProjects() {
  return (
    <div style={{ padding: "2rem", color: "#e0e0e0", background: "#0c0c0c", minHeight: "100vh" }}>
      <h1 style={{ color: "#ff9f00" }}>📚 Research & Innovation Projects</h1>
      <p>My experimental and academic works focused on applying emerging technologies like AI and Blockchain in solving real-world problems.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>🤖 AI-Powered Border Monitoring Prototype</h2>
        <p>An experimental defense-tech concept integrating AI vision and motion tracking to identify and analyze human movement patterns for early threat detection at national borders.</p>

        <h2>📊 Research Collaboration API (University Project)</h2>
        <p>A Flask-based backend system that supports research publication sharing and academic collaboration among professors and students. Includes JWT-secured endpoints and structured data management using SQLAlchemy.
            GitHub repo: https://github.com/zico-hubb/university-research-platform
        </p>
      </section>
    </div>
  );
}
