"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const cursorBorder = document.createElement("div");

    cursor.id = "cursor";
    cursorBorder.id = "cursor-border";

    document.body.appendChild(cursor);
    document.body.appendChild(cursorBorder);

    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    const moveCursor = (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const loop = () => {
      const easting = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    };

    const addHoverEffects = () => {
      document.querySelectorAll("[data-cursor]").forEach((item) => {
        item.addEventListener("mouseover", () => {
          if (item.dataset.cursor === "pointer") {
            cursorBorder.style.backgroundColor = "rgba(255,255,255,.6)";
            cursorBorder.style.setProperty("--size", "30px");
          }
          if (item.dataset.cursor === "pointer2") {
            cursorBorder.style.backgroundColor = "white";
            cursorBorder.style.mixBlendMode = "difference";
            cursorBorder.style.setProperty("--size", "80px");
          }
        });
        item.addEventListener("mouseout", () => {
          cursorBorder.style.backgroundColor = "unset";
          cursorBorder.style.mixBlendMode = "unset";
          cursorBorder.style.setProperty("--size", "50px");
        });
      });
    };

    document.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(loop);
    addHoverEffects();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      cursorBorder.remove();
    };
  }, []);

  return null;
}
