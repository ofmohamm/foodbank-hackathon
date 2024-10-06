import { Link } from "react-router-dom";
import "../Styling/Form.scss";
import React, { useState } from "react";

const Form = () => {
  // State to handle form inputs
  const [organizationName, setOrganizationName] = useState("");
  const [organizationContactMail, setOrganizationContactMail] = useState("");
  const [items, setItems] = useState(""); // Form submit handler

  const handleSubmit = (e) => {
    e.preventDefault(); // Process the form submission logic here
    console.log({
      organizationName,
      organizationContactMail,
      items,
    });
  };

  return (
    <div className="app-container">
            
      <header>
      <img
        src="/IMG/img/logo.jpeg"
        alt="Barakah Bites Logo"
        style={{ height: "55px" }}
      />
      <Link to="/" className="logo-text">
          Barakah Bites
        </Link>
        <h1>Available Food & Order</h1>
        <nav className="nav">
    <a id="navbar-brand" to="/" className="nav-logo">
    </a>
  </nav>
      
      </header>
            
      <main>
                {/* Available Food Section */}
                
        <section>
                    <h2>Available Food</h2>
                    
          <table>
                        
            <thead>
                            
              <tr>
                                <th>Food Item</th>
                                <th>Description</th>
                                <th>Dining Hall</th>
                              
              </tr>
                          
            </thead>
                        
            {/* T1 */}
            <tbody>
                            
              <tr>
                                <td>Pizza</td>
                                <td>Delicious cheese pizza</td>
                                <td>Shaw</td>
                              
              </tr>
                            
              <tr>
                                <td>Burger</td>
                                <td>Beef burger</td>
                                <td>Ernie</td>
                              
              </tr>
                          
            </tbody>
            {/* T2 */}
            <tbody>
                            
              <tr>
                                <td>Pizza</td>
                                <td>Delicious cheese pizza</td>
                                <td>Shaw</td>
                              
              </tr>
                            
              <tr>
                                <td>Burger</td>
                                <td>Beef burger</td>
                                <td>Ernie</td>
                              
              </tr>
                          
            </tbody>
            {/* T3 */}
            <tbody>
                            
              <tr>
                                <td>Pizza</td>
                                <td>Delicious cheese pizza</td>
                                <td>Shaw</td>
                              
              </tr>
                            
              <tr>
                                <td>Burger</td>
                                <td>Beef burger</td>
                                <td>Ernie</td>
                              
              </tr>
                          
            </tbody>
                      
          </table>
                  
        </section>
                {/* Order Form Section */}
                
        <section>
                    <h2>Order Form</h2>
                    
          <form id="order-form" onSubmit={handleSubmit}>
                        
            <div className="form-group">
                            
              <label htmlFor="organizationName">Organization Name:</label>
                            
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                required
              />
                          
            </div>
                        
            <div className="form-group">
                            
              <label htmlFor="organizationContactMail">Contact Email:</label>
                            
              <input
                type="email"
                id="organizationContactMail"
                name="organizationContactMail"
                value={organizationContactMail}
                onChange={(e) => setOrganizationContactMail(e.target.value)}
                required
              />
                          
            </div>
                        
            <div className="form-group">
                            
              <label htmlFor="items">Items (comma-separated):</label>
                            
              <input
                type="text"
                id="items"
                name="items"
                value={items}
                onChange={(e) => setItems(e.target.value)}
                required
              />
                          
            </div>
                        
            <div
              className="form-group"
              style={{ flexBasis: "100%", textAlign: "center" }}
            >
                            <button type="submit">Submit Order</button>
                          
            </div>
                      
          </form>
                  
        </section>
              
      </main>
            {/* Footer Section */}
            
      <footer className="footer">
        <p>© 2024 Bakarah Bites. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Form;
