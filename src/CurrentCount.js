import React from "react";
import { compose } from "redux";
import CounterContext from "./CounterContext";
import withContext from "./withContext";

function CurrentCount({count}) {
  return <div>Current count is {count}. (change me for hot reload)</div>;
}

const enhance = compose(
  withContext(CounterContext, {
    mapProps: count => ({ count })
  }),
  React.memo,
);

export default enhance(CurrentCount);
