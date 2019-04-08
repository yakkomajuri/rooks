import React, { useState, useRef } from "react";
import { storiesOf } from "@storybook/react";
import usePrevious from "@rooks/use-previous";
import useInput from "@rooks/use-input";

storiesOf("usePrevious", module).add("basic example", () => (
  <UsePreviousDemo />
));

function UsePreviousDemo() {
  const myInput = useInput("hello world");
  const previousValue = usePrevious(myInput.value);
  return (
    <div>
      <div>
        <input {...myInput} />
      </div>
      <p>
        Current value is <b>{myInput.value}</b>
      </p>
      <p>
        Previous value was <b>{previousValue || "-"}</b>
      </p>
    </div>
  );
}
