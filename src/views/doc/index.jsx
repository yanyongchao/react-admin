import React from "react";
import TypingCard from "@/components/TypingCard";
const Doc = () => {
  const cardContent = `
    大家好，我是我欲成风
  `;
  return (
    <div className="app-container">
      <TypingCard title="作者博客" source={cardContent} />
    </div>
  );
};

export default Doc;
