import React from 'react'

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Agent from '../../Components/About/Agent/Agent';
import RenterHostess from '../../Components/About/RenterHostess/RenterHostess';
import Motto from '../../Components/About/Motto/Motto';
import contact from '../../Components/Assets/contact.jpg'



const AboutUs = () => {
  return (
    <div>
      <Header/>
      <RenterHostess
       firsttag="Buyer"
       f_paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, inventore quidem eos temporibus magni laboriosam earum officia iusto assumenda labore ex molestiae aliquam voluptatem molestias id sapiente sit nemo? Voluptatibus!"
       sectag="Seller"
       s_paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, inventore quidem eos temporibus magni laboriosam earum officia iusto assumenda labore ex molestiae aliquam voluptatem molestias id sapiente sit nemo? Voluptatibus!"
       srcimg={contact}
       />
      <Agent/>
      <RenterHostess
       firsttag="Renter"
       f_paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, inventore quidem eos temporibus magni laboriosam earum officia iusto assumenda labore ex molestiae aliquam voluptatem molestias id sapiente sit nemo? Voluptatibus!"
       sectag="Hostess"
       s_paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, inventore quidem eos temporibus magni laboriosam earum officia iusto assumenda labore ex molestiae aliquam voluptatem molestias id sapiente sit nemo? Voluptatibus!"
       srcimg={contact}
       />
      <Motto/>
      <Footer/>
      
    </div>
  )
}

export default AboutUs
