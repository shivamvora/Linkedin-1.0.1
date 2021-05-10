import styled from "styled-components";

const Login = (props) => {
    return (
            <Container>
                <Nav>
                    <a href="/">
                        <img src="/assets/login-logo.svg" alt="" />
                    </a>
                    <div>
                        <Join>Join now</Join>
                        <SignIn>Sign in</SignIn>
                    </div>
                </Nav>
            </Container>
        )
};

const Container = styled.div`
    padding:0px;
`;

const Nav = styled.nav`
    max-width:1128px;
    margin:auto;
    padding:12px 0 16px;
    display:flex;
    align-items:center;
    positiom:relative;
    justify-content:space-between;
    flex-wrap:nowrap;

    & > a {
        width:135px;
        height:34px;
        @media (max-width:768px){
            padding:0 5px;
            
        }
    }
`;

const Join = styled.a`
    font-size:20px;
    padding: 10px 12px;
    text-decoration:none;
    border-radius:4px;
    color:rgba(0,0,0,0.6);
    margin-right:12px;
    &:hover{
        background-color:rgba(0,0,0,0.08);
        color:rbga(0,0,0,0.9);
        text-decoration:none;
        cursor:pointer;
    }
`;

const SignIn = styled.a`
font-size:18px;
box-shadow:inset 0 0 0 1px #0a66c2;
color:#0a66c2;
padding:10px 24px;
font-weight:600;
line-height:40px;
border-radius:24px;
text-align:center;
background-color:rgba(0,0,0,0);
transation-duration:167ms;
&:hover{
    background-color:rgba(112,181,249,0.15);
    cursor:pointer;
    color:#0a66c2;
    text-decoration:none;
}
@media (max-width:768px){
    padding:10px 10px;
    
}
`;

export default Login;