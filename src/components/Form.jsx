import { useState } from "react";

export default function Form() {

    const[title , setTitle] = useState("");
    const[content, setContent] = useState("");

    

    const handleSumit = (e) => {
        e.preventDefault();
        const blog = {title, content};
        console.log("Blog Created", blog);
    }


  return (
    <form onSubmit={handleSumit}>
        <input
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <textarea 
        placeholder="write your blog.."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        
        ></textarea>

        <button type="submit">Publish</button>
    </form>

  );
}
