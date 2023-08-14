import "./style.css";
import shahidBackground from '../../assets/Image/defaultShahid.jpg'
 const Login=()=>{
    return (
        <>
        <div   style={{backgroundImage:`url${shahidBackground}`,height:'1000px',backgroundSize:'cover'}}>
            <div className="main-login">
                <div className="avatar-login"></div>
                <div className="username-input"></div>
                <div className="password-input"></div>
            </div>
        </div>
        
        </>
    )
}
export default Login;