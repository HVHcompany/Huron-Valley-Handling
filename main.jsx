import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [showCallOptions, setShowCallOptions] = useState(false);
  const quoteEmail = "mailto:HuronValleyHandling@gmail.com?subject=HVH%20Quote%20Request&body=Name:%0D%0ACity:%0D%0APhone:%0D%0AWhat%20needs%20removed:%0D%0AAre%20there%20stairs%20or%20heavy%20items:%0D%0APreferred%20date:%0D%0A";

  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <a href="#home" className="brand">
            <span>HVH</span>
            <small>Huron Valley Handling LLC</small>
          </a>
          <div className="nav-links">
            <a href="#why-hvh">Why HVH</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" className="hero-grid">
          <div>
            <p className="pill">Serving Ann Arbor, Ypsilanti & surrounding areas</p>
            <h1>Junk removal, light demo, and cleanup made simple.</h1>
            <p className="lead">Huron Valley Handling LLC helps homeowners, renters, landlords, and small businesses clear unwanted junk, debris, furniture, appliances, and light demolition messes.</p>
            <div className="button-row">
              <a href="#contact" className="btn primary">Get a Free Quote</a>
              <a href="#services" className="btn outline-blue">Services</a>
              <a href="#pricing" className="btn outline">View Pricing</a>
            </div>
          </div>

          <div className="hero-card">
            {[
              "Garage, basement, and apartment cleanouts",
              "Furniture, mattress, and appliance removal",
              "Yard debris and general property cleanup",
              "Small-scale demolition and debris hauling"
            ].map((item) => (
              <div className="check-item" key={item}><span>✓</span>{item}</div>
            ))}
          </div>
        </section>
      </header>

      <main>
        <section id="services" className="section">
          <p className="eyebrow">What we do</p>
          <h2>Reliable hauling and cleanup services.</h2>
          <p className="section-text">We show up, load it, clean up the area, and haul it away responsibly.</p>

          <div className="trust-grid">
            <div className="trust-card"><h3>No Hidden Fees</h3><p>HVH believes in honest service and straightforward pricing with no surprise charges after the job is complete.</p></div>
            <div className="trust-card"><h3>Upfront Clear Quotes</h3><p>Customers receive a clear estimate before work begins so they know exactly what to expect.</p></div>
          </div>

          <div className="service-grid">
            <ServiceCard icon="🚚" title="Junk Removal" text="Furniture, mattresses, appliances, boxes, trash bags, garage clutter, and general unwanted items." />
            <ServiceCard icon="🔨" title="Light Demolition" text="Small shed removal, cabinet tear-outs, deck debris, flooring removal, and non-structural demo cleanup." />
            <ServiceCard icon="🧹" title="Property Cleanup" text="Move-outs, landlord cleanouts, curbside pickup, yard debris, and post-project cleanup." />
          </div>

          <div className="button-row section-buttons">
            <a href={quoteEmail} className="btn dark">Request a Quote</a>
            <a href="#contact" className="btn light-outline">Contact HVH</a>
          </div>
        </section>

        <section id="pricing" className="section white">
          <p className="eyebrow">Starter pricing</p>
          <h2>Clear estimates before we start.</h2>
          <p className="section-text">Final pricing depends on volume, weight, disposal fees, stairs, distance, and labor difficulty.</p>
          <div className="price-grid">
            <PriceCard title="Minimum Pickup" price="$75-$100" detail="Single-item or very small pickups." />
            <PriceCard title="Small Load" price="$125-$175" detail="A few bulky items or light clutter." />
            <PriceCard title="Quarter Load" price="$200-$275" detail="Good for small cleanouts." />
            <PriceCard title="Half Load+" price="$300+" detail="Larger cleanouts quoted by photo or in person." />
          </div>
          <div className="demo-box"><h3>Light demolition pricing</h3><p>Small demolition jobs are priced by labor, debris volume, disposal cost, and job complexity. Send photos for a fast estimate.</p><a href={quoteEmail}>Get Demo Quote</a></div>
        </section>

        <section id="why-hvh" className="section why-grid">
          <div><p className="eyebrow">Why choose HVH</p><h2>Local, hardworking, and easy to work with.</h2><p className="section-text">We are building Huron Valley Handling LLC on reliability, fair prices, and respectful service.</p></div>
          <div className="feature-list">
            <Feature icon="⏱" text="Fast scheduling and responsive communication" />
            <Feature icon="📍" text="Serving Ann Arbor, Ypsilanti, Saline, Canton, Belleville and nearby areas" />
            <Feature icon="✓" text="Customer agreement and job approval before work begins" />
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-grid">
            <div><p className="eyebrow light">Get a quote</p><h2>Send photos. Get a fast estimate.</h2><p>For the fastest quote, send your name, city, photos of the items, and whether stairs or heavy lifting are involved.</p>
              <div className="contact-lines">
                <ContactLine icon="☎" text="Benjamin Ferguson: (734) 431-1898" link="tel:+17344311898" />
                <ContactLine icon="☎" text="Siah Thomason: (734) 881-2558" link="tel:+17348812558" />
                <ContactLine icon="✉" text="HuronValleyHandling@gmail.com" link="mailto:HuronValleyHandling@gmail.com" />
                <ContactLine icon="📍" text="Ann Arbor / Ypsilanti Area, Michigan" link="#home" />
              </div>
            </div>

            <form className="quote-form">
              <input placeholder="Name" />
              <input placeholder="Phone or email" />
              <input placeholder="City" />
              <textarea placeholder="What do you need removed or cleaned up?" />
              <a href={quoteEmail} className="btn dark full">Email HVH for a Free Quote</a>
              <button type="button" onClick={() => setShowCallOptions(true)} className="btn primary full">Call HVH Now</button>
            </form>
          </div>
        </section>
      </main>

      {showCallOptions && <CallModal close={() => setShowCallOptions(false)} />}
      <footer>© 2026 Huron Valley Handling LLC. Founded by Benjamin A. Ferguson and Siah B. Thomason.</footer>
    </div>
  );
}

function ServiceCard(props) { return <div className="card"><div className="icon">{props.icon}</div><h3>{props.title}</h3><p>{props.text}</p></div>; }
function PriceCard(props) { return <div className="price-card"><h3>{props.title}</h3><strong>{props.price}</strong><p>{props.detail}</p></div>; }
function Feature(props) { return <div className="feature"><span>{props.icon}</span><p>{props.text}</p></div>; }
function ContactLine(props) { return <a href={props.link} className="contact-line"><span>{props.icon}</span><p>{props.text}</p></a>; }
function CallModal({ close }) { return <div className="modal-backdrop"><div className="modal"><button onClick={close} className="close">×</button><p className="eyebrow">Call HVH</p><h3>Choose who to contact</h3><p>Tap either founder below to call directly.</p><a href="tel:+17344311898" onClick={close} className="call-option"><strong>Benjamin A. Ferguson</strong><span>Founder</span><p>(734) 431-1898</p></a><a href="tel:+17348812558" onClick={close} className="call-option"><strong>Siah B. Thomason</strong><span>Founder</span><p>(734) 881-2558</p></a></div></div>; }

createRoot(document.getElementById('root')).render(<App />);
