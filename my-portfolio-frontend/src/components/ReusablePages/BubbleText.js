import React, { useEffect } from "react";

const BubbleText = ({ text }) => {
  return (
    <Bubble myText={text} />
  );
};

const Bubble = ({ myText }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "text-white";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "text-blue-400";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "text-blue-400";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "100";
        this.style.color = "text-indigo-300";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "text-indigo-300";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "text-indigo-300";
        }
      });
    });
  }, []);

  return (
    <h2 className="hover-text font-thin text-indigo-300">
      <Text>{myText}</Text>
    </h2>
  );
};

const Text = ({ children }) => {
  return (
    <span>
      {children.split("").map((child, idx) => (
        <span
          className="transition-all duration-100 ease-in-out font-thin text-fuchsia-500"
          key={idx}
        >
          {child}
        </span>
      ))}
    </span>
  );
};

export default BubbleText;
