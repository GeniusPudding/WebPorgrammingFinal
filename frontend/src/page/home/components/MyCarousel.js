import React, { useState , useEffect} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { Button, Modal } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import './MyCarousel.scss'
import nameURL from '../../../assets/images/name.jpg'
import SupplyModal from '../../../component/SupplyModal'
import DemandDetail from '../../../component/DemandDetail.js'

const MyCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [detailsVisible, setDetailsVisible] = useState(false)
    // console.log('MyCarousel props.onSupply:',props.onSupply)
    //init: 從後端抓所有的需求單
    useEffect(()=>{
      if(props.posts.length>0){
        setTitle(props.posts[activeIndex].title)
        setName(props.posts[activeIndex].name)
      }
    },[activeIndex])

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === props.posts.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? props.posts.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const demands = props.posts.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >  
            <div style={{
               
            }}>
                {/* {item.name} */}
            </div>
            <button style={{
              backgroundColor: 'transparent',
              backgroundSize: 'contain',
              borderRadius: '10%',
              width: '35vw',
              height: '70vh',
              position: 'relative',
              left: '26vw'
            }}  onClick={()=>{
              
              setDetailsVisible(true)
        
            }}>{ (item.imgPath)? (<img src={item.imgPath[0]} alt={item.altText} style={{}}/>):(<p>no picture</p>) }
          </button>
          
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });
  
    return (
        <>
            <div className='home-title'>
                <span className='from' style={{
                    backgroundImage: nameURL
                }}>{`是來自${name}的請求...`}</span> 
              
                <span className='post-title'><div>{`!~${title}~!`}</div></span>
            </div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={props.posts} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {demands}
                
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            {
              (props.posts.length != 0)?
              // ( <Details item={props.posts[activeIndex]} detailsVisible={detailsVisible} onChange={setDetailsVisible} onSupply={props.onSupply}/>)
              ( <DemandDetail isHome={true} onSupply={props.onSupply} detailsVisible={detailsVisible} item = {props.posts[activeIndex]} onChange={setDetailsVisible}></DemandDetail>  )
              :(
                <h1>再等等，目前線上暫無任何需求哦!</h1>
              )
            }
           
      </>
    );
}


export default MyCarousel;