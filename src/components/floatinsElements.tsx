function FloatingTexts() {
  const items = [
    { text: "Page not found", x: "10%", y: "20%" },
    { text: "Oops", x: "80%", y: "30%" },
    { text: "Error", x: "15%", y: "70%" },
    { text: "Nothing to see here", x: "75%", y: "75%" },
    { text: "Awkward", x: "50%", y: "10%" },
    { text: "Sorry", x: "50%", y: "85%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          className="floating-item"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default FloatingTexts;