import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Style/home.css"

const Home = () => {
  
  return (
    <div  >
          <Carousel
            infiniteLoop={true}
            useKeyboardArrows
            autoPlay
            interval={2000}
            stopOnHover={false}
            stopOnInteraction={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            <div>
              <img
                src="https://cdn.flipshope.com/blog/wp-content/uploads/2021/10/oneplus-simply-diwali-sale.jpg"
                alt="not found"
                style={{height:"35rem"}}
              />
            </div>
            <div>
              <img
                src="https://www.cherrypickindia.in/wp-content/uploads/2020/12/1-848x487.jpg"
                alt="not found"
                style={{height:"35rem"}}
              />
            </div>
            <div>
              <img
                src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1593772959236/oppo-offers.jpg"
                alt="not found"
                style={{height:"35rem"}}
              />
            </div>
            <div>
              <img
                className="slide_image"
                src="https://images.livemint.com/img/2022/03/05/1600x900/iPhone_13_1646469167438_1646469167644.jpg"
                alt="not found"
                style={{height:"35rem"}}
              />
            </div>
            <div>
              <img
                className="slide_image"
                src="https://www.reliancedigital.in/medias/Flex544x306.jpg?context=bWFzdGVyfGltYWdlc3w3MTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDMyLzEwMDUzOTI5NjMxNzc0LmpwZ3xkYWU3N2E0MzQ0MGRlM2VkN2EwZWE5ZDE2NWE0NTY2YzAxZTI2ZDQ4MzAxODFjNDEzZmJiMjcwMGM3NWYzMTQ1"
                alt="not found"
                style={{height:"35rem"}}
              />
            </div>
          </Carousel>
          <div>
            <h3>Latest Product</h3>
          </div>
          <div>
            <h3>Trendy Products</h3>
          </div>
          <div>
            <h3>Most Seen Product</h3>
          </div>
          <div className='home-gif'>
            <img src="https://gifdb.com/images/high/green-iphone-advertisement-it87mmp94zxj8olt.gif" alt='Loading...' />
          </div>
        </div>
  )
}

export default Home