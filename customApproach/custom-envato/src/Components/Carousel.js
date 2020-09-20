import React from "react";
import './Carousel.styles.css';

export class Carousel extends React.Component {



  render() {
    return (
      <div>
        <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
         
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          <div class="carousel-inner">
            <div class="item active">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Los Angeles" style={{width: "100%"}}/>
            </div>
      
            <div class="item">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Chicago" style={{width:"100%"}} />
            </div>
          
            <div class="item">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="New york" style={{width:"100%"}} />
            </div>
          </div>
      
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      </div>
    );
  }
}



// changeImage = (e) => {
//   let x = document.querySelector('.carousel').style.backgroundImage.split('"')[1];
//   console.log(typeof x);
//   if (x === "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80") {

//     document.querySelector(".carousel").style.backgroundImage = "url('https://images.unsplash.com/photo-1600476121208-7cc2911a5460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
//   }
//   }


// <div className="carousel">
//             <div className="inner">
//                 <div className="text">
//                     <h1 className="logo">EDUMA</h1>
//                     <ul>
//                       <li>DEMOS</li>
//                       <li>COURSES</li>
//                       <li>FEATURES</li>
//                       <li>EVENTS</li>
//                       <li>GALLERY</li>
//                       <li>BLOG</li>
//                       <li>CONTACT</li>
//                       <li>SHOP</li>
//                     </ul>
//                 </div>
//                 <div className="chevrons-container">
//                   <div className="chevrons">
//                     <div className="button-left">
//                       <button onClick={this.changeImage} className="button"><i class="fas fa-chevron-left"></i></button>
//                     </div>
//                     <div className="button-right">
//                       <button className="button"><i class="fas fa-chevron-right"></i></button>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//         </div>