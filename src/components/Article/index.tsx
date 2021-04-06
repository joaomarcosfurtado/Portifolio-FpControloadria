import { useState } from "react";

interface ArticlesProps {
  id: number;
  title: string;
  text: string;
  isActive?: boolean;
}

export function Article ({ id, title, text, isActive } : ArticlesProps) {
  // const [ articleIsOpen, setArticleIsopen] = useState(false)
  
  // function openArticleText (id: number) {
    
  // }

  return (
    <fieldset>
      <legend>{title}</legend>
      { isActive && (<p>{text}</p>) }
      
    </fieldset>
  );
}