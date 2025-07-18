type RainbowTextProps = {
  children: React.ReactNode;
  leftColor?: string;
  centerColor?: string;
  rightColor?: string;
};

export function RainbowText({
  children,
  leftColor = "#00E05E",
  centerColor = "#577AC7",
  rightColor = "#D153ED",
}: RainbowTextProps) {
  const dynamicStyle = {
    backgroundImage: `linear-gradient(90deg, ${leftColor}, ${centerColor}, ${rightColor})`,
  };

  return (
    <span className="bg-clip-text text-transparent" style={dynamicStyle}>
      {children}
    </span>
  );
}
