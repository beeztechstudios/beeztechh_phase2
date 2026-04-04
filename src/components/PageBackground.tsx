export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-3]"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50,40 60,45 60,55 50,60 40,55 40,45' fill='rgba(0,0,0,0.035)'/%3E%3C/svg%3E")`,
        
        // 👇 bigger tile = more gap
        backgroundSize: "40px 40px",
      }}
    />
  );
}