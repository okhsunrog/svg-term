import * as React from "react";

export const Viewbox: React.FunctionComponent<React.PropsWithChildren<{}>> = props => {
  return <g>{props.children}</g>;
};
