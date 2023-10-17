function log() {
  console.log("ihr schweine");
}

function PrimaryButton() {
  return (
    <div>
      <button onClick={log}> button</button>
    </div>
  );
}

export default PrimaryButton;
