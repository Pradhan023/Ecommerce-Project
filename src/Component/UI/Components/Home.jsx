import React, { useContext } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Style/home.css"
import Store from '../../Content/Store';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { addtoCart } from '../../../Feature/cartslice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const Data = useContext(Store)
  const latest = Data.filter((item)=> item.id%5 ===0)
  const Trendy = Data.filter((item)=> item.id%4 ===0)
  const MostSeen = Data.filter((item)=> item.id%8 ===0)
  const dispatch = useDispatch()


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" , borderRadius:"10px",position:"absolute" ,right:"5px"  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"10px",position:"absolute" }}
        onClick={onClick}
      />
    );
  }
  

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
              <img className="hometop-slider"
                src="https://cdn.flipshope.com/blog/wp-content/uploads/2021/10/oneplus-simply-diwali-sale.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img className="hometop-slider"
                src="https://www.cherrypickindia.in/wp-content/uploads/2020/12/1-848x487.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img className="hometop-slider"
                src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1593772959236/oppo-offers.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img
                className="hometop-slider"
                src="https://images.livemint.com/img/2022/03/05/1600x900/iPhone_13_1646469167438_1646469167644.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img
                className="hometop-slider"
                src="https://www.reliancedigital.in/medias/Flex544x306.jpg?context=bWFzdGVyfGltYWdlc3w3MTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDMyLzEwMDUzOTI5NjMxNzc0LmpwZ3xkYWU3N2E0MzQ0MGRlM2VkN2EwZWE5ZDE2NWE0NTY2YzAxZTI2ZDQ4MzAxODFjNDEzZmJiMjcwMGM3NWYzMTQ1"
                alt="not found"
              />
            </div>
          </Carousel>
          <div className='homeCardProduct-parent'>
            <h3>Latest Product</h3>
            <div  className='slider'>
            <Slider {...settings}>
              {
                latest && latest.map((item,index)=>{
                  const{id=item.id,img=item.img,heading=item.heading,price=item.price} = item
                    return(
                      <div className='home-cardProduct' key={index}>
                        <Link className='linkhome-cardProduct'  to={`/rendercard/${item.id}/${item.category}` }  >
                          <img src={item.img} alt='Loading...' />
                          <h2 className='homecard-heading'>{item.heading}</h2>
                          <span>⭐⭐⭐⭐⭐</span>
                          <h2 className='homecard-Price'>{"₹ " +item.price}</h2>
                        </Link>
                        <button onClick={()=>dispatch(addtoCart({id,img,heading,price}))}>Add to cart</button>
                      </div>
                    )
                })
              }
              </Slider>
            </div>
          </div>

          {/* Trendy */}
          <div className='homeCardProduct-parent'>
            <h3>Trendy Products</h3>
            <div  className='slider'>
            <Slider {...settings}>
              {
                Trendy && Trendy.map((item,index)=>{
                  const{id=item.id,img=item.img,heading=item.heading,price=item.price} = item
                    return(
                      <div className='home-cardProduct' key={index}>
                        <Link className='linkhome-cardProduct'  to={`/rendercard/${item.id}/${item.category}` }  >
                          <img src={item.img} alt='Loading...' />
                          <h2 className='homecard-heading'>{item.heading}</h2>
                          <span>⭐⭐⭐⭐⭐</span>
                          <h2 className='homecard-Price'>{"₹ " +item.price}</h2>
                        </Link>
                        <button onClick={()=>dispatch(addtoCart({id,img,heading,price}))}>Add to cart</button>
                      </div>
                    )
                })
              }
              </Slider>
            </div>
          </div>
          <div className='homeCardProduct-parent'>
            <h3>Most Seen Product</h3>
            <div  className='slider'>
            <Slider {...settings}>
              {
                MostSeen && MostSeen.map((item,index)=>{
                  const{id=item.id,img=item.img,heading=item.heading,price=item.price} = item
                    return(
                      <div className='home-cardProduct' key={index}>
                        <Link className='linkhome-cardProduct'  to={`/rendercard/${item.id}/${item.category}` }  >
                          <img src={item.img} alt='Loading...' />
                          <h2 className='homecard-heading'>{item.heading}</h2>
                          <span>⭐⭐⭐⭐⭐</span>
                          <h2 className='homecard-Price'>{"₹ " +item.price}</h2>
                        </Link>
                        <button onClick={()=>dispatch(addtoCart({id,img,heading,price}))}>Add to cart</button>
                      </div>
                    )
                })
              }
              </Slider>
            </div>
          </div>
          <div className='home-gif'>
            <img src="https://gifdb.com/images/high/green-iphone-advertisement-it87mmp94zxj8olt.gif" alt='Loading...' />
          </div>
        </div>
  )
}

export default Home