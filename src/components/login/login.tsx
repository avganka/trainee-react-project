import { FormEvent, MouseEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { AppRoutes } from '../../const';
import { loginAction } from '../../store/api-actions';
import { changeCity } from '../../store/offers-data/offers-data';
import { store } from '../../store/store';
import { AuthData } from '../../types/login';
import Logo from '../logo/logo';

export default function Login():JSX.Element {
  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const onSubmit = (authData: AuthData) => {
    store.dispatch(loginAction(authData));
  };

  const onLocationClickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeCity('Amsterdam'));
    <Navigate to={AppRoutes.Main}/>;
  };

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email.current !== null && password.current !== null) {

      return onSubmit({
        email: email.current.value,
        password: email.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">

          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={email}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={password}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href='/' onClick={onLocationClickHandler}><span>Amsterdam</span></a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

