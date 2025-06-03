import { langOptions } from "../langOptions";
import React from "react";
import { clsx } from "clsx";

export default function Languages(props) {
  // state: language chips
  const [languageChips, setLanguageChips] = React.useState(langOptions);

  // mapping the state onto the page
  const languages = languageChips.map((lingo, index) => {
    const className = clsx({
      "crossed-out": props.wrongGuessCount > index
    });

    return (
      <div
        key={index}
        style={{
          backgroundColor: lingo.backgroundColor,
          borderRadius: "6px",
          color: lingo.color,
          minWidth: "10vh",
          minpHeight: "3vh",
          textAlign: "center",
        }}
        className={className}
      >
        {lingo.name}
      </div>
    );
  });

  return <div className="languages">{languages}</div>;
}
