import { React, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { login } from '../../actions/auth';



const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
  
    const dispatch = useDispatch();
  
    const onChangeMail = (e) => {
      const mail = e.target.value;
      setMail(mail);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      setLoading(true);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        dispatch(login(mail, password))
          .then(() => {
            props.history.push("/profile");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };
  
    if (isLoggedIn) {
      return <Redirect to="/monCompte" />;
    }
  
    return (
      <div className="col-md-12">
        <div className="card card-container">  
          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <label htmlFor="mail">Email :</label>
              <Input
                type="text"
                className="form-control"
                name="mail"
                value={mail}
                onChange={onChangeMail}
                validations={[required]}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password">Mot de passe :</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>
  
            <div className="form-group">
              <button className="btn btn-connexion" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
  
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    );
  };
  
  export default Login;