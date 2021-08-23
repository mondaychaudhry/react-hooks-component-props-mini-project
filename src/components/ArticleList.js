import React from "react";
import Article from "./Article"

function ArticleList ({x}){
    const y = x.map((z)=>{
        return (
            <Article key={z.id} name={z.title} date={z.date} preview={z.preview}/>

        )
    })
    return <main>{y}</main>
}

export default ArticleList 