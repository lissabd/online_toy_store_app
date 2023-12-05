import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InfoBlock from './InfoBlock';
import './styles/login.css';
import Reviews from './Reviews';

const Login = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const popularProducts = [
    {
      id: 10,
      Title: "Plush toy Teddy bear with a bow",
      Cat: 'Plush',
      Manufacturer: "China",
      Price: "$52",
      PriceTotal: "$52",
      Count: 1,
      Img: './images/plushes/plush-1.png',
  },
  {
      id: 11,
      Title: "Cute Lion With Big Eyes",
      Cat: 'Plush',
      Price: "$45",
      PriceTotal: "$45",
      Count: 1,
      Manufacturer: "China",
      Img: './images/plushes/plush-2.png',
  },
  {
      id: 12,
      Title: "Green Car",
      Cat: 'Cars',
      Manufacturer: "China",
      Price: "$55",
      PriceTotal: "$55",
      Count: 1,
      Img: './images/cars/машина1.png',
  },
  { 
    id: 15,
    Title: "Robot",
    Cat: 'Meccano',
    Manufacturer: "China",
    Price: "$65",
    PriceTotal: "$65",
    Count: 1,
    Img: './images/meccano/meccano-1.png',
  },
  ];

  useEffect(() => {
    const existingUser = localStorage.getItem('userData');
    if (existingUser){
       // получаем email если пользователь уже был зарегистрирован 
       //чтобы ему не нужно было снова вводить email
      const { email: storedEmail } = JSON.parse(existingUser);
        // Устанавливаем email в состояние компонента
      setEmail(storedEmail);
      setIsLogin(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    alert("Вы вошли.") 
    setIsLogin(true); // чтобы перерисовать jsx на приветствие
    localStorage.setItem('userData', JSON.stringify({ email }));
    /*navigate("/");*/
  };
  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem('userData');
  };

  return (
    <div className="login-container">
      {isLogin ? (
        <div className="already-login">
          <div className="welcome-section">
            <img src="./images/дляВхода.jpg" alt="Welcome" />
            <div className="overlay">
              <h1>Welcome, {email}!</h1>
              <button onClick={handleLogout}>Log out</button>
            </div>
          </div>
        <h2>You might be interested in...</h2>
        <div className="three-products">
          <div className='container2'>
              {
                popularProducts.map((curElm) => 
                {
                  return (
                     <div className='box2' key={curElm.id}>
                      <Link to="/shop">
                        <div className='img_box2'>
                          <img src={curElm.Img} alt={curElm.Title}></img>
                        </div>
                        </Link>
                      <div className='detail2'>
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  )                  
                })
              }
            </div>
        </div>
        <Reviews/>
        </div>  
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Log in</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className='form-but'>Send</button>
        </form>
      )}
      {isLogin || (
        <div className="signup-section">
          <div>Don't have an account? <Link to="/registration">Register here</Link></div>
        </div>
      )}
      <InfoBlock/>
    </div>
  );
};

export default Login;
