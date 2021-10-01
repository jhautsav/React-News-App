import React, { Component } from "react";

export default class Card extends Component {
  
  render() {
      let {title,imgurl,url,desc,publishedAt,author,source}=this.props
    return (
      <> 
    
        <div className="col-md-3 my-5 d-flex justify-content-center align-items-center">
          <div className="card"  >
          <span class="position-absolute top-0   translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
    {source}
    
    </span>
            <img
              className="card-img-top"
              src={imgurl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{title} 
    </h5>
              <p className="card-text">
                {desc}
              </p>
              <p className="card-text"><small class="text-muted">By {author} On   {new Date(publishedAt).toGMTString()}</small></p>
              <a href={url} target="_blank" className="btn  btn-sm btn-dark">
                Read More
              </a>
              
            </div>
          </div>
        </div>
 
           
      </>
    );
  }
}
