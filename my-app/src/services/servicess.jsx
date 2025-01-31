// import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage1 from "../assets/banner-01.jpg";
// import ExampleCarouselImage2 from "../assets/banner-02.jpg";
// import ExampleCarouselImage3 from "../assets/banner-03.jpg";


// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//       <img
//           className="d-block w-100"
//           src={ExampleCarouselImage1}  // Correct image path
//           alt="First slide"
//         />
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="d-block w-100"
//           src={ExampleCarouselImage2}  // Correct image path
//           alt="First slide"
//         />
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="d-block w-100"
//           src={ExampleCarouselImage3}  // Correct image path
//           alt="First slide"
//         />
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;



import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1  from '../assets/banner-01.jpg';
// import ExampleCarouselImage1 from '../assets/banner-01.jpg';
// import ExampleCarouselImage2 from '../assets/banner-01.jpg';




function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage1 text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;