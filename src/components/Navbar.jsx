import { Badge } from '@material-ui/core';
import { Category, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
height: 60px; 
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items:center;

`;
const Left = styled.div`
flex:1 ;
display:flex;
align-items:center;
`;
const Language = styled.div`
font-size:14px
cursor:pointer;
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray ;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input = styled.input`
border :none;
`
const Center = styled.div`
flex:1 ;
text-align:center;
`;
const Logo = styled.h1`
font-weight:bold;

`
const Right = styled.div`
flex:1 ;
display:flex;
align-items:center;
justify-content:flex-end;
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
`
const Categorys = styled.div`

`


const Navbar = () => {
    return (
        <Container >
           <Wrapper>
               <Left> 
                   <Language>Spanish</Language>
                   <SearchContainer> <Input/> <Search style={{color:"gray", fontSize:16}}/> 
                    </SearchContainer>
                </Left>
               <Center><Link to="/"> <Logo>MELI Dos.Cero</Logo> </Link> </Center>
               <Categorys> <Link to="/category"> OULET! </Link> </Categorys>
               <Right> 
                    <MenuItem>Registro</MenuItem>
                    <MenuItem>Iniciar Sesion</MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                         </Badge>
                </Right>
           </Wrapper>
        </Container>
    )
}

export default Navbar
