
import logo from '../../assets/logo.png'
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact">
      <div className="contact-info">
  <div className="first-info">
    <img src={logo}/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <p>12345678</p>
    <p>amdouni@gmail.com</p>
  </div>

  <div className="second-info">
    <h4>Support</h4>
    <p>Contact us</p>
    <p>About Page</p>
    <p>Shopping</p>
    <p>Privacy</p>
  </div>

  <div className="third-info">
    <h4>Shop</h4>
    <p>Men's Shopping</p>
    <p>Women's Shopping</p>
    <p>Kids's Shopping</p>
  </div>

  <div className="fourth-info">
    <h4>Shop</h4>
    <p>Company</p>
    <p>About</p>
    <p>Blog</p>
  </div>
</div>

      </section>
    </>
  );
};

export default Contact;
