import React from 'react';

const Login = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
     } = props;
  return(
      <>
    <h3 class="heading"><span>welcome To Chatapp</span></h3>
    <section className="login">
        <div className="chat">
        <img class="chat-img" src={process.env.PUBLIC_URL + "/girl1.png"} width="600" height="500"/>
        </div>
        <div className="loginContainer">
            <label>Username</label>
            <input
                type="text"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>password</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
              <div className="btnContainer">
                  {hasAccount ? (
                      <>
                          <button onClick={handleLogin}>Sign In</button>
                          <p>Don't have an account?
                              <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                      </>
                  ) : (
                      <>
                          <button onClick={handleSignup}>Sign Up</button>
                          <p>Have an account?
                              <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                      </>)}
              </div>
        </div>
    </section>
    </>
   )

 }

export default Login