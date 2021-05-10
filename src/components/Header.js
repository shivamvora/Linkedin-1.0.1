import styled from 'styled-components';

const Header = (props) => {
    return (

        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/assets/home-logo.svg"/>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                    >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                    </svg>
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color:white;
    border-bottom:1px solid rgba(0,0,0,0.08);
    left:0;
    padding:0 24px;
    position:fixed;
    top:0;
    width:100vw;
    z-index:100;
`;
const Content = styled.div`
display:flex;
align-items:center;
margin: 0 auto;
min-height:100%;
max-width:1128px;
`;

const Logo = styled.span`
     margin-right:8px;
     font-size:0px;
`;

const Search = styled.div`
    opacity:1;
    flex-grow:1;
    position:relative;
    & > div{
        max-width:280px;
        input{
            border:none;
            box-shadow:none;
            background-color:#eef3f8;
            border-radius:2px;
            color:rgba(0.0.0.0.9);
            width:218px;
            padding:0 8px 0 40px;
            line-height:1.75;
            font-weight:400;
            font-size:14px;
            height:34px;
            border-color:#dce6f1;
            vertical-align:text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width:40px;
    position:absolute;
    z-index:1;
    top:10px;
    border-radius:0 2px 2px 0;
    margin:0;
    pointer-events:none;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

export default Header;