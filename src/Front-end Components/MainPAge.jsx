import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export const MainPAge = () => {
    const [content,setContent] = useState([]);
    const {id} = useParams();
    useEffect(()=>
    {
        fetch(`https://blog-u-n.herokuapp.com/api/content`).then(res => res.json()).then(content => setContent(content))
    },[id])
  return (
    <div>
        {
                content.filter(function(a)
                {
                    return a.id === id;
                }).map((article)=>
                (
                    
                    <div id="con" key={article.id}>
                        <h1>{article.title}</h1>
                        <img src={article.Image} alt='pic' id='fit-img'/>
                        <p id='tparagraph'>{article.information}</p>
                    </div>
                ))
        }
    </div>
  )
}
