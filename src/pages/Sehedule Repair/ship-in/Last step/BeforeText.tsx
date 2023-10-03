interface BeforeTextProps {
  label: string;
}

export default function BeforeText({ label }: BeforeTextProps) {
  return (
    <div
      style={{
        content: "Order Summary",
        position: "absolute",
        top: 0,
        left: 0,
        transform: "rotate(90deg)",
        fontSize: "3rem",
        marginLeft: "-80px",
        marginTop: "-40px",
        fontFamily: "IndustrialGothicBannerStd",
        lineHeight: "4.5rem",
        transformOrigin: "left",
        fontWeight: 500,
        textTransform: "lowercase"
      }}
    >
      {label}
    </div>
  );
}
