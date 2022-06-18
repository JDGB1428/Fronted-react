import styled from 'styled-components';
import {Link} from 'react-scroll'

export const NavContainer = styled.nav`
    h2{
        font-weight: 400;
        margin-left: 5rem;
    }
    padding: .4rem;
    background: #83f084;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 2rem;

    &:hover{
        background-color: white;
        padding: 10px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 12px;
        cursor: pointer;
    }
`;