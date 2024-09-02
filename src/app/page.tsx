"use client";

import { IconButton, Button, Stack, Typography, Container, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);


  const handleIncremental = (price: number) => {
    setTotal(total + 1);
    setTotalPrice(totalPrice + price);
  };

  const handleDecremental = (price: number) => {
    if (total > 0) {
      setTotal(total - 1);
      setTotalPrice(totalPrice > 0 ? totalPrice - price : 0);
    }
  };

  const myItems = [
    { itemname: "iPhone15", price: 32900 , imageUrl : "https://media-cdn.bnn.in.th/332635/iPhone_15_Pink_6-square_medium.jpg" },
    { itemname: "iPhone15 Pro", price: 41900 , imageUrl : "https://media-cdn.bnn.in.th/332518/iPhone_15_Pro_Blue_Titanium_6-square_medium.jpg" },
    { itemname: "iPad Pro", price: 39900 , imageUrl : "https://media-cdn.bnn.in.th/395476/iPad-Pro-11-inch-M4-Wi-Fi-SpaceBlack-4-square_medium.jpg" },
    { itemname: "iPad Air", price: 23900 , imageUrl : "https://media-cdn.bnn.in.th/395406/iPad-Air-11-inch-M2-Wi-Fi-Blue-4-square_medium.jpg" },
    { itemname: "iPad", price: 13900 , imageUrl : "https://media-cdn.bnn.in.th/246779/iPad_10th_Gen_Cellular_Silve_5G_3-square_medium.jpg" },
    { itemname: "iPad mini", price: 19900 , imageUrl : "https://media-cdn.bnn.in.th/140815/iPad_mini_Cellular_Purple_9-square_medium.jpg" },
    { itemname: "MacBook Air", price: 39900 , imageUrl : "https://media-cdn.bnn.in.th/379960/MacBook-Air-13-inch-M3-Space-Gray-1-square_medium.jpg" },
    { itemname: "MacBook Pro", price: 59900 , imageUrl : "https://media-cdn.bnn.in.th/380000/MacBook-Pro-M3-Space-Gray-1-square_medium.jpg" },
    { itemname: "iMac", price: 49900 , imageUrl : "https://media-cdn.bnn.in.th/348082/iMac-M3-2-ports-Green--8-square_medium.jpg" },
    { itemname: "Mac mini", price: 20900 , imageUrl : "https://media-cdn.bnn.in.th/270102/Mac_mini_M2_4-port_Pro_Silver_PDP-1-square_medium.jpg" },
    { itemname: "Mac Studio", price: 74900 , imageUrl : "https://media-cdn.bnn.in.th/305342/Mac_Studio_M2_1-square_medium.jpg" },
  ];
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">Shopping Cart</Typography>
      <Grid container spacing={3}>
        {myItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.itemname}>
            <ItemCart
              itemname={item.itemname}
              itemPrice={item.price}
              imageUrl={item.imageUrl}
              handleIncremantal={() => handleIncremental(item.price)}
              handleDecremental={() => handleDecremental(item.price)}
            />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <Typography variant="h5">Total Items: </Typography>
        <Typography variant="h5">{total}</Typography>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
        <Typography variant="h5">Total Price: </Typography>
        <Typography variant="h5">{totalPrice.toLocaleString()} THB</Typography>
      </Stack>
    </Container>
  );
}
