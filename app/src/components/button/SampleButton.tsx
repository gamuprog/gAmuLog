import React, { useState } from "react";

type Props = {
  className?: string;
};

const SampleButton = (className: Props) => {
  return (
    <button
      className={`px-2 rounded-full border md:rounded-md md:py-2 md:px-4 ${className}`}
    >
      ボタン
    </button>
  );
};

export default SampleButton;
