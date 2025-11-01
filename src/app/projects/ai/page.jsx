export default function AIProjects() {
  return (
    <div style={{ padding: "2rem", color: "#e0e0e0", background: "#0b0b0b", minHeight: "100vh" }}>
      <h1 style={{ color: "#00c8ff" }}>🤖 AI & Computer Vision Projects</h1>
      <p>These projects highlight my work in artificial intelligence, facial recognition, and human behavior analysis using Python, OpenCV, TensorFlow, and deep learning models.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>👁️ FaceGate – Facial Recognition Attendance System</h2>
        <p>A facial recognition-based school attendance solution built with Flask and deep learning (FaceNet + MTCNN). Automates attendance tracking, enhances accuracy, and prevents proxy attendance using real-time verification.
            GitHub repo : https://github.com/zico-hubb/facial-recognition-access-
        </p>

        <h2>🚶 Smart Surveillance System (Gait Recognition)</h2>
        <p>An AI-powered surveillance prototype that identifies individuals based on walking patterns (gait). Designed for security use-cases such as restricted area monitoring and border surveillance.</p>

        <h2>Health Data Visualizer and forecast</h2>
        <p>An AI powered platform that extracts data uploaded as an excel document, then visualizes it in a graph, chart or map. 
          GitHub repo: https://github.com/zico-hubb/health-visualizer
        </p>
        <h2>Constitution AI advisor</h2>
        <p> AN AI powered tool to help citizens better understand the constituion with the help of AI. A person states there case and the AI gives advise based on the constitution.
        </p>
      </section>
    </div>
  );
}
