interface CheckBocProps {
  isChecked: any;
  handleCheckboxChange: any;
}
export default function CheckBox({
  handleCheckboxChange,
  isChecked,
}: CheckBocProps) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <input
        style={{
          width: "54px",
          height: "54px",
          background: "#f8f1ec",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          appearance: "none",
        }}
        type="checkbox"
        name="tac"
        id="tac"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        style={{
          content: "L",
          color: "#df7c6d",
          transform: "scaleX(-1) rotate(-35deg)",
          marginTop: "-26px",
          marginLeft: "8px",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: isChecked ? "block" : "none",
          fontSize: "89px",
        }}
      >
        L
      </div>
    </label>
  );
}
