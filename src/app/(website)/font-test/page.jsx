export default function FontTestPage() {
  return (
    <div style={{ padding: "60px", background: "#0a0a0a", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ fontSize: "20px", marginBottom: "40px", fontFamily: "monospace", color: "#888" }}>
        🔤 Font Test Page
      </h1>

      {/* Resonate Test */}
      <div style={{ marginBottom: "60px" }}>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px", fontFamily: "monospace" }}>
          font-family: Resonate (className: font-resonate)
        </p>
        <h2 className="font-resonate" style={{ fontSize: "64px", fontWeight: 400 }}>
          Resonate Regular 400
        </h2>
        <h2 className="font-resonate" style={{ fontSize: "64px", fontWeight: 700 }}>
          Resonate Bold 700
        </h2>
        <p className="font-resonate" style={{ fontSize: "24px", fontWeight: 400 }}>
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
        <p className="font-resonate" style={{ fontSize: "18px", fontWeight: 300 }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
        </p>
      </div>

      {/* STK Bureau Serif Test */}
      <div style={{ marginBottom: "60px" }}>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px", fontFamily: "monospace" }}>
          font-family: STK Bureau Serif (className: font-stk-bureau)
        </p>
        <h2 className="font-stk-bureau" style={{ fontSize: "64px", fontWeight: 400 }}>
          STK Bureau Serif Regular 400
        </h2>
        <h2 className="font-stk-bureau" style={{ fontSize: "64px", fontWeight: 700 }}>
          STK Bureau Serif Bold 700
        </h2>
        <p className="font-stk-bureau" style={{ fontSize: "24px" }}>
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
      </div>

      {/* Comparison with system font */}
      <div>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px", fontFamily: "monospace" }}>
          System sans-serif (for comparison)
        </p>
        <h2 style={{ fontSize: "64px", fontFamily: "sans-serif" }}>
          System Sans Serif
        </h2>
        <p style={{ fontSize: "24px", fontFamily: "sans-serif" }}>
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
      </div>
    </div>
  );
}
