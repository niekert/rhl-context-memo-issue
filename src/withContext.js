import React from 'react';

export default function withContext(
  Context,
  { mapProps = (context) => ({ context }) } = {},
) {
  return ComposedComponent => props => (
    <Context.Consumer>
      {value => <ComposedComponent {...mapProps(value, props)} {...props} />}
    </Context.Consumer>
  );
}
