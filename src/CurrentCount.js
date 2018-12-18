import React from "react";
import { compose } from "redux";
import CounterContext from "./CounterContext";
import withContext from "./withContext";

function CurrentCount({count}) {
  return <div>Current count is {count}. (change me for hot reload issues)</div>;
}

const enhance = compose(
  React.memo,
  withContext(CounterContext, {
    mapProps: count => ({ count })
  }),
);

export default enhance(CurrentCount);
