import { useState } from "react";

interface ArticlesProps {
  id: number;
  title: string;
  text: string;
}

export function Article ({ id, title, text } : ArticlesProps) {
  const [ articleIsOpen, setArticleIsopen] = useState(false)
  
  function openArticleText (id: number) {
    
  }

  return (
    <fieldset>
      <legend>{title}</legend>
      <p>{text}{id}</p>
    </fieldset>
  );
}