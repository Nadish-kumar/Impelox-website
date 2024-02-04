import React from 'react'
import "../Contact/Contact.css"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Contact = () => {
  return (
    <div className='container-fluid'>
      <Header />
    <section id="contact" class="contact flex-column">
    <div class="row">
        <div class="column">
            <div class="column-1">
                <img src="https://grand-creponne-bb10d7.netlify.app/img/home/contact.jpg" alt="people" />
            </div>
        </div>
        <div class="column">
            <div class="column-2 bg-light">
                <h4>Request Callback</h4>
                <form action="" class="callback-form">
                    <div class="form-control">
                        <label for="name"></label>
                        <input type="text" id="name" name="name" placeholder="Enter your Name" />
                    </div>
                    <div class="form-control">
                        <label for="email"></label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div class="form-control">
                        <label for="Phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Enter your phone" />
                    </div>
                    <input type="submit" value="send" id="submit" class="contact_btn" />
                </form>
            </div>
        </div>
    </div>
</section>
<Footer />
</div>
  )
}

export default Contact