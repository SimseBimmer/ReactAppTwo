import styled from 'styled-components'

export const NavBarStyled = styled.nav`
    
  width: fit-content;

  ul{
    box-sizing: border-box;
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: .5rem;
    border: 2px solid #27402c;

    li{
      display: inline-block;
      padding: 0 1px;

      a{
        display: block;
        padding: 0.8rem;
        text-decoration: none;
        color: #27402c;
        font-size: 1.3rem;
        border-bottom: 2px solid #eee;
        transition: 200ms ease-in-out;
        margin: 0;

        &.active{
          color: #27402c;
          border-bottom: 2px solid #27402c;
          font-weight: 600;
          letter-spacing: 2px;
          transition: 200ms ease-in-out;
        }
      }
    }
  }
`

