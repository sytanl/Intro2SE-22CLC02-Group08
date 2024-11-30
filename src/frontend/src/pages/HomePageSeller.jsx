import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Nav from 'react-bootstrap/Nav';
import Banner from '../components/Banner';
import MostSearchedItems from '../components/MostSearchedItem';
import ProductCard from '../components/ProductCard';
import About from '../components/About';
import Footer from '../components/Footer';
import RecentPostedSeller from '../components/RecentPostedSeller';
import UserContext from "../context/userContext";
import '../styles/HomePage.scss';


function HomePageSeller() {
  const { userType, setUserType } = useContext(UserContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const dummyProducts = Array(16).fill({  // tạo tạm trước khi có sb
    image: '/mostSearch-laptop.jpg', 
    name: 'Tên đồ', 
    price: 'Giá tiền', 
  });

  useEffect(() => {
    const stored_userType = localStorage.getItem("userType");
    if (stored_userType) {
      setUserType(stored_userType);
    }
  }, [setUserType]);

  console.log("id: ", localStorage.getItem("id"));
                console.log("type: ", localStorage.getItem("userType"));
  

  return (
    <div className="main-container">
    
      <div className="header-wrapper">
        <Header />
      </div>
 
      <div className="home-container">
        <Nav className="category-nav">
          <Nav.Item className="nav-item">
            <Nav.Link href="/women">Women</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/men">Men</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/kids">Kids</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/electronics">Electronics</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/books">Books</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/bags">Bags</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/office">Office</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/tools">Tools</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="/all">All</Nav.Link>
          </Nav.Item>
        </Nav>

        <Banner userType={userType} />

        <div className="homepageseller-most-searched-container">
          <MostSearchedItems />
        </div>

        <div className="homepageseller-recent-posted-container">
          <RecentPostedSeller />
        </div>

        

        <div className="product-list-container">
          <h2 className="product-list-title">Recently Posted</h2>
          <div className="product-grid">
            {dummyProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
               
              />
            ))}
          </div>
        </div>
        
    <About />
    <Footer />
      </div>
    </div>
  );
}

export default HomePageSeller;
