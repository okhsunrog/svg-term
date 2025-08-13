import * as React from "react";
import * as ReactDOM from "react-dom";
import { SvgTerm } from "./svg-term.js";
import { loadCast } from "./load-cast.js";
import { defaultTheme } from "./default-theme.js";

async function main(window: Window, document: Document) {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const data = await fetch('/fixtures/example.json');
  const cast = loadCast(await data.text());

  ReactDOM.render(
    <SvgTerm
      cast={cast}
      theme={defaultTheme}
      decorations={false}
      paddingX={10}
      paddingY={10}
      cursor={true}
    />,
    container
  );
}

window.addEventListener("DOMContentLoaded", () => main(window, document));
