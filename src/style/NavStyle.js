import styled from "styled-components";

const NavStyle = styled.div`
    background-color: 	#0e1111;
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 3rem;
    font-size: 2.5rem;
    .home-icon{
        display: flex;
        align-items: center;
    }
    .home{
        margin-left: 0.6rem;
    }
    
    img{
        height: 60px;
        border-radius: 3rem;
    }
`;

export default NavStyle;