import React from 'react'
import './Contact.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Contact() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className='how'>Contact Us</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn sign">Submit</button>
            </form>
          </div>
          <div className="col-md-6 add">
            <h1 className='how'>Address</h1>
            <p>1234 Street, City</p>
            <p>State Name</p>
            <p>Country</p>
            <p>PIN-1233456</p>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
