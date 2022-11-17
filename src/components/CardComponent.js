import React from 'react'

function CardComponent(props) {
  return (
    <div className='First'>
        <div className='Second'>
            <div className="bg-white w-75 h-80">
              <img src={props.image} width={120} height={120} className="ml-14 mt-0 pt-8" />
              <div className='Third'>
                  <h3 className="text-3xl text-black capitalize text-center pt-4">{props.name}</h3>
              </div>
               <p className='mt-10 text-base'>Web Developer</p>
                <div className='space-x-2'>
                  <a href='#' className='text-xl'><i class="fa-brands fa-google-plus-g"></i></a>
                  <a href='#' className='text-xl'><i class="fa-brands fa-twitter"></i></a>
                  <a href='#' className='text-xl'><i class="fa-brands fa-facebook-f"></i></a>
                  <a href='#' className='text-xl'><i class="fa-brands fa-linkedin"></i></a>
                </div>            
            </div>
        </div>
    </div>
  );
}

export default CardComponent;