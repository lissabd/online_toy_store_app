import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './styles/registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [pass, setPass] = useState('');
  const [checkPass, setcheckPass] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    if (pass === checkPass) {
      e.preventDefault();
      const userData = { email, name, surname };  // данные пользователя осоновные
      localStorage.setItem("userData", JSON.stringify(userData));  // сохраняем в лок хранилище

      // очищаем все данные формы
      setPass('');
      setcheckPass('');
      setEmail('');
      setName('');
      setSurname('');

      alert("Вы зарегистрированы.");
      navigate('/login');

    } else {
      setError("Пароли не совпали. Попробуйте снова.");
       // если неправильно ввел повторно пароль, очищаем для повторной попытки только чекпас
       setcheckPass('');
    }
  };
  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h1>Registration</h1>
        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='Enter your password'
            id='password'
            name='password'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='repeatPassword'>Repeat Password</label>
          <input
            value={checkPass}
            onChange={(e) => setcheckPass(e.target.value)}
            type='password'
            placeholder='Enter your password again'
            id='repeatPassword'
            name='repeatPassword'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='name'>Enter Your First Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Enter your first name'
            id='firstName'
            name='firstName'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='name'>Enter Your Last Name</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type='text'
            placeholder='Enter your last name'
            id='lastName'
            name='lastName'
            required
          />
        </div>
        <button type='submit'>Send</button>
      </form>
      <div className="error-message">{error}</div>
      <div className="login-section">
        <div>Already have an account? <Link to="/login">Log in here</Link></div>
      </div>
    </div>
  );
}

export default Registration;

