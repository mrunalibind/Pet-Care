import React from 'react';
import './Home.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="banner">
        <img
          className="banner-image"
          src="https://www.companioncare.co.uk/contentassets/c14b93636ac94f8784700161774413e3/companion-care---complete-care---homepage.png?width=1040"
          alt=""
        />
        <div className="banner-content">
          <h2>BETTER FOR YOUR PET, BETTER FOR YOUR POCKET.</h2>
          <p>Our health plans are a simple, cost-effective way to keep your pet protected all-year round.</p>
          <button className="banner-button">Choose Your Health Plan</button>
        </div>
      </header>
      <section className="intro">
        <h1>Find Out More About Companion Care</h1>
      </section>
      <section className="animal-cards">
        {/* Replace the placeholders with your actual content */}
  
        <div className="animal-card">
          <img
            className="animal-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8D535awSyiym0htSBevWm47VGzvrPiv6HPUqIn9PthLJQqVIGDi4pRdRbLZ8szzh50U&usqp=CAU"
            alt="Protecting your rabbit from flystrike"
          />
          <div className="animal-info">
            <h2>Protecting your rabbit from flystrike</h2>
            <p>Click below to read about how you can prevent flystrike in rabbits.</p>
            <Link to="/companionCare" className="menu-link">
            <button className="animal-button">Read More</button>
          </Link>
          </div>
        </div>
        <div className="animal-card">
          <img
            className="animal-image"
            src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg"
            alt="Protecting your Pets from flystrike"
          />
          <div className="animal-info">
            <h2>Protecting your rabbit from flystrike</h2>
            <p>Click below to read about how you can prevent flystrike in rabbits.</p>
            <Link to="/companionCare" className="menu-link">
            <button className="animal-button">Read More</button>
          </Link>
          </div>
        </div>
        {/* Repeat similar cards for other content */}
      </section>
    </div>
  );
}

export default Home;
