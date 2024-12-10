import styled from 'styled-components'

export const NavBarStyled = styled.nav`
    
  width: 100%;

  ul{
    box-sizing: border-box;
    list-style-type: none;
    display: inline-flex;
    margin: 0;
    padding: 0;

    li{
      display: inline-block;
      margin-right: 1rem;
      a{
        display: block;
        padding: 0.8rem;
        text-decoration: none;
        color: #000;
        &.active{
        color: red;
        font-weight: 600;
        letter-spacing: 1px;
        transition: 200ms ease-in-out;
        }
      }
    }
  }





`

