import React from 'react';
import '../about/index.css'
import imgforabout from '../../images/image.png'
import cartimg from '../../images/cart.png'
import access from '../../images/accses.png'
import clothes from '../../images/clothes.png'
import shoes from '../../images/shoes.png'

const About = () => {
    return (
        <><div className='about bg-gradient-to-r from-slate-900 to-slate-700 flex justify-between'>
            <div>
                <h1 className='text-5xl font-bold tracking-tight text-white'>DUKon</h1>
                <p style={{margin:'30px auto', width:'600px'}} >Welcome to DUKon - your ultimate online shopping destination. Discover a curated selection of trendy fashion, cutting-edge electronics, and home essentials. Shop with confidence, knowing every product meets our high standards of quality. Experience exceptional customer service and convenience at DUKon. Start exploring now!</p>
                <button
        type="button"
        class="flex border border-teal-500 bg-teal-400  text-white rounded-md px-6 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600"
      >
        Shop <span><img src={cartimg} alt="cartimg" /></span>
      </button>
            </div>
            <div>
            <img style={{width: '490px', height: '330'}} src={imgforabout} />
            </div>

        </div>
        <div style={{width:'80%',margin:'0px auto', position:'relative', bottom:'100px'}} className='flex justify-between'>
            <div style={{ textAlign: 'center' }}>
                <img style={{width:'350px', height:'350px'}} src={access} alt=''/>
                <p style={{fontWeight: '500'}}>Accessories</p>
            </div>

            <div style={{ textAlign: 'center' }}>
            <img style={{width:'350px', height:'350px'}} src={clothes} alt=''/>
                <p style={{fontWeight: '500'}}>Clothes</p>
            </div>

            <div style={{ textAlign: 'center' }}>
            <img style={{width:'350px', height:'350px'}} src={shoes} alt=''/>
                <p style={{fontWeight: '500'}}>Shoes</p>
            </div>

        </div>
        </>
        
    );
};

export default About;