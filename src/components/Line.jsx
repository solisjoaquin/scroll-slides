const LineText = ({ children, styles }) => {
  return (
    <div className="overflow-hidden font-clash text-7xl font-medium">
      <div
        className={`group-hover/wrap:translate-y-full group-hover:animate-reveal ${styles}`}
      >
        {children}
      </div>
    </div>
  );
};

export default LineText;
