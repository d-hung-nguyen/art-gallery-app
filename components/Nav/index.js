import styled from "styled-components"
import Link from "next/link"

export default function Nav () {
    return (
    <StyledNav>
        <ul>
            <Link href="../">
            <li>Spotlight</li> </Link>

            <Link href="../art-pieces">
            <li>Art Pieces</li> </Link>
            <Link href="../favorites">
            <li>Favorites</li> </Link>
        </ul>
    </StyledNav>
)}

const StyledNav = styled.nav`
position: absolute;
background-color: grey;
width: 100%;
bottom: 0;
z-index: 3;
ul{
    display: flex;
list-style: none;
margin: 0;
padding: 0;

}
li{
    flex: 1;
    padding: 20px;
    text-align: center;
}
`
