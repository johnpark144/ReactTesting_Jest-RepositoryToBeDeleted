import React, { useState } from "react";

function SummaryForm() {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <input onChange={() => setDisabled(!disabled)} type="checkbox" />
      <button disabled={disabled}>Confirm order</button>
    </>
  );
}

export default SummaryForm;
