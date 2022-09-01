import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
  &:hover {
    transform: scale(1.02);
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
          <Center>
            <Logo>SHOPSHOP</Logo>
          </Center>
        </Link>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}>
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
