import React from 'react'
import ContactHeader from './contactHeader'
import { ContactButton, ContactContainer, ContactSubTitle, ContactTexts, ContactTitle, Contact_us, RightArrow } from '../style'
import rightArrow from "../../assets/arrow.svg"
import Footer from '../../footer/footer'

const Contact = () => {
  return (
    <div>
      <ContactHeader/>

        <Contact_us>

        <div>
          <ContactTitle>WE ARE HERE FOR YOU</ContactTitle>
          <ContactSubTitle>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br /> please forward it to our support desk and we will get back to you as soon as possible.</ContactSubTitle>
        </div>

        <ContactContainer>
          <ContactTexts>
            <p>497 Evergreen Rd. Roseville, <br />CA 95673</p>
            <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
              <b>View map <RightArrow src={rightArrow}/></b>
            </div>
            <p style={{marginTop: "30px"}}>Phone: +44 345 678 903 <br />Email: luxury_hotels@gmail.com</p>
          </ContactTexts>
          <div>
            <form>
              <label>Name</label> <br />
              <input type="text" name="name" id="name"  /> <br />

              <label htmlFor="email">Email Address</label> <br />
              <input type="email" name="email" id="email"/> <br />

              <label htmlFor="message">Message</label> <br />
              {/* <textarea name="message" id="message" cols="30" rows="10" style={{resize: "none"}}></textarea> <br /> */}
              <input type="text" style={{height:"352px"}}/>

              <div style={{display: "flex", justifyContent: "end", marginTop: "30px", marginBottom: "300px"}}>
                <ContactButton>Submit</ContactButton>
              </div>
            </form>
          </div>
        </ContactContainer>
        </Contact_us>

      <Footer/>
    </div>
  )
}

export default Contact