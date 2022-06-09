import Slider from "../slider/slider";
import Search from "../search/search";

export default function Main({ list }) {
  return (
    <>
      <Search />
      <Slider list={list} />
    </>
  );
}

{
  /* <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/tYSbIKgYWdw?modestbranding=1"
                    title="YouTube video player"
                    srcDoc="<style>*{padding:0;margin:0;overflow:hidden}
                html,body{height:100%}
                img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                </style>
                <a href=https://www.youtube.com/embed/tYSbIKgYWdw?modestbranding=1>
                <img src=https://img.youtube.com/vi/li_9PBrcOcQ/hqdefault.jpg alt='Demo video'>
                <span>▶</span>
                </a>"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */
}
