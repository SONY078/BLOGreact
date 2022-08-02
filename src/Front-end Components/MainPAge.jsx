import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './author.png';
export const MainPAge = () => {
    const [content,setContent] = useState([]);
    const {id} = useParams();
    const [count,setCount] = useState(1000);
    const handleClick = ()=>setCount(count+1);
    useEffect(()=>
    {
        fetch(`https://blog-u-n.herokuapp.com/api/content`).then(res => res.json()).then(content => setContent(content));
        
    },[id])
    

    
  return (
    <div>
    {
        // eslint-disable-next-line
        content.filter((a)=>a.id==id).map((article)=>(
            <div id="con" key={article.id}>
                        <h1>{article.title}</h1>
                        <img src={article.Image} alt='pic' id='fit-img'/><br/><br/>
                        <p id='tparagraph'>{article.information}
                        <br/><br/><br/>



                        <h3 id='counter'>{count}</h3>
<div id="share">
<div id="shareIcon">
<img src={Sh} alt='share'/>
</div>
<button onClick={handleClick} id='like'><i class="fa-solid fa-thumbs-up"></i></button>
<a href='http://www.facebook.com/sharer/sharer.php?u=https://www.analyticsinsight.net/python-is-no-more-overrated-thanks-to-python-3-11/'><i class="fa-brands fa-facebook"></i></a>
<a href='https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwww.analyticsinsight.net%2Fpython-is-no-more-overrated-thanks-to-python-3-11%2F&source=tweetbutton&text=Python%20is%20No%20More%20Overrated,%20Thanks%20to%20Python%203.11&url=https%3A%2F%2Fwww.analyticsinsight.net%2Fpython-is-no-more-overrated-thanks-to-python-3-11%2F&via=https://twitter.com/analyticsinme'><i class="fa-brands fa-twitter"></i></a>
<a href='https://plus.google.com/share?url=https://www.analyticsinsight.net/python-is-no-more-overrated-thanks-to-python-3-11/'><i class="fa-brands fa-linkedin"></i></a>
<a href='http://pinterest.com/pin/create/button/?url=https://www.analyticsinsight.net/python-is-no-more-overrated-thanks-to-python-3-11/&media=https://www.analyticsinsight.net/wp-content/uploads/2022/06/Python-is-no-more-overrated-Thanks-to-Python-3.jpg&description=Python%20is%20No%20More%20Overrated,%20Thanks%20to%20Python%203.11'><i class="fa-brands fa-pinterest"></i></a>
<a href='https://www.instagram.com/accounts/emailsignup/'><img src={Insta} alt='insta' id='insta'/></a>

<br/><br/><br/>
</div>
<img src={Aut} alt='sony' id='author'/><h3>Sony N</h3>
                        </p>
                    </div>
        ))
    }
    </div>
  )
}
