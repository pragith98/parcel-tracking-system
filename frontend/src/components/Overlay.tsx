function Overlay() {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      aria-hidden="true"
    ></div>
  );
}

export default Overlay;
