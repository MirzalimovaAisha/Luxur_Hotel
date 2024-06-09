import React from 'react'
import ContactHeader from './contactHeader'
import { ContactButton, RightArrow } from '../style'
import rightArrow from "../../assets/arrow.svg"
import Footer from '../../footer/footer'

const Contact = () => {
  return (
    <div>
      <ContactHeader/>

      <div className="contact-us" style={{marginTop: "261px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div>
          <h1>WE ARE HERE FOR YOU</h1>
          <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br /> please forward it to our support desk and we will get back to you as soon as possible.</p>
        </div>

        <div style={{display: "flex", marginTop: "100px", gap: "280px"}}>
          <div className="left">
            <p>497 Evergreen Rd. Roseville, <br />CA 95673</p>
            <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
              <b>View map <RightArrow src={rightArrow}/></b>
            </div>
            <p style={{marginTop: "30px"}}>Phone: +44 345 678 903 <br />Email: luxury_hotels@gmail.com</p>
          </div>
          <div className="right">
            <form action="#">
              <label htmlFor="name">Name</label> <br />
              <input type="text" name="name" id="name" style={{width: "100%", height: "40px", marginBottom: "20px"}} /> <br />

              <label htmlFor="email">Email Address</label> <br />
              <input type="email" name="email" id="email" style={{width: "100%", height: "40px", marginBottom: "20px"}}/> <br />

              <label htmlFor="message">Message</label> <br />
              <textarea name="message" id="message" cols="30" rows="10" style={{resize: "none"}}></textarea> <br />

              <div style={{display: "flex", justifyContent: "end", marginTop: "30px", marginBottom: "300px"}}>
                <ContactButton>Submit</ContactButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact