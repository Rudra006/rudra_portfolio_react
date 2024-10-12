import { Phone, MapPin, Mail, Globe } from 'lucide-react'

export default function Contact({ isActive }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <section className={`contact section ${isActive ? 'active' : ''}`} id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Question ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon"><Phone /></div>
            <h4>Call Us On</h4>
            <p>+91 7437865981</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><MapPin /></div>
            <h4>Office</h4>
            <p>Berhampur</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><Mail /></div>
            <h4>Email</h4>
            <p>rudramadhab006@gmail.com</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><Globe /></div>
            <h4>Website</h4>
            <p>www.rudra.com</p>
          </div>
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}