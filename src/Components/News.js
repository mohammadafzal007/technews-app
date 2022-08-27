import { useGlobalContext } from "./Main";
const News = () => {
 
  const {articles,isLoading}=useGlobalContext();
  
  if(isLoading){
    return(
      <>
      <div className="d-flex justify-content-center mt-3">
  <div className="spinner-border" role="status">
    <span className="visually-hidden ml-2">Loading...</span>
  </div>
</div>
      </>
    )
  }
  return (
    <>
  
    <div className="container">
      <div className="row">
        
  {articles.map((item)=>{
    return(
      // <div className="col-md-3 my-3" key={item.url}>
      <div className="col col-md-4 col-sm-12" key={item.url}>
<div className="card m-3"  >

  <img src={! item.urlToImage ?"https://airtype-cdn.nyc3.digitaloceanspaces.com/airtype/images/projects/TN-logo.png?mtime=20201020202048&focal=none":item.urlToImage} className="card-img-top" alt="NewsImage" />
  <div className="card-body">
    <h5 className="card-title"><u>{item.title ? item.title.slice(0, 66) : ""}</u></h5>
    <p className="card-text">{item.description ? item.description.slice(0, 111) : ""}</p>
    <strong> By {item.author} on {new Date(item.publishedAt).toGMTString()}</strong>
    <br></br>
    <div className="d-flex justify-content-between">
    <a href={item.url} target="_blank"  rel="noreferrer" className="btn btn-primary mt-2 me-2">Read More</a>
   
    </div>
  </div>
</div>
</div>

    )
  })}
  </div>
  </div>
  </>
  )
}

export default News