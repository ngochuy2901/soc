import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css"

// function Login(){
//     return(<div class="login">
//       <form>
//         {/* <!-- Email input --> */}
//         <div class="form-outline mb-4">
//           <input type="email" id="form2Example1" class="form-control" />
//           <label class="form-label" for="form2Example1">Email address</label>
//         </div>

//         {/* <!-- Password input --> */}
//         <div class="form-outline mb-4">
//           <input type="password" id="form2Example2" class="form-control" />
//           <label class="form-label" for="form2Example2">Password</label>
//         </div>

//         {/* <!-- 2 column grid layout for inline styling --> */}
//         <div class="row mb-4">
//           <div class="col d-flex justify-content-center">
//             {/* <!-- Checkbox --> */}
//             <div class="form-check">
//               <input class="form-check-input" type="checkbox" id="form2Example31" />
//               <label class="form-check-label" for="form2Example31"> Remember me </label>
//             </div>
//           </div>

//           <div class="col">
//             {/* <!-- Simple link --> */}
//             <a href="#!">Forgot password?</a>
//           </div>
//         </div>

//         {/* <!-- Submit button --> */}
//         <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

//         {/* <!-- Register buttons --> */}
//         <div class="text-center">
//           <p>Not a member? <a href="#!">Register</a></p>
//           <p>or sign up with:</p>
//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-facebook-f"></i>
//           </button>

//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-google"></i>
//           </button>

//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-twitter"></i>
//           </button>

//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-github"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const App = props => (
//   <LoginForm />
// );


function Login(){
  return(
    <div id="loginform">
      <FormHeader title="Đăng nhập" />
      <Form />
      <div><a href="#">Quên mật khẩu?</a></div>
      <OtherMethods />
    </div>
  );
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <FormButton />
 </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>Đăng nhập</button>
    <button id="dang-ky">Đăng ký</button>
  </div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);

const OtherMethods = props => (
<div id="alternativeLogin">
  <label>Or sign in with:</label>
  <div id="iconGroup">
    <Facebook />
    <Twitter />
    <Google />
  </div>
</div>
);

const Facebook = props => (
<a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
<a href="#" id="twitterIcon"></a>
);

const Google = props => (
<a href="#" id="googleIcon"></a>
);

// ReactDOM.render(<App />, document.getElementById('container'));

export default Login;
