"use client";
import {
  IconButton,
  Button,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  imageUrl,
  handleIncremantal,
  handleDecremental
}: {
  itemname: string;
  itemPrice: number;
  imageUrl: string;
  handleIncremantal: () => void;
  handleDecremental: () => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremantal();
  };
  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * itemPrice);
      handleDecremental();
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={{xs:12 , md:4}} spacing={2}>
        <img src={imageUrl} alt={itemname} style={{ width: "100px", height: "auto", borderRadius: "100px" }} />
      </Grid>
      <Grid size={{xs:8 , md:8}} spacing={2}>
        <Stack spacing={1} alignItems="center">
          <Typography variant="h6" align="center">
            {itemname}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton onClick={handleRemoveItemClick}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{count}</Typography>
            <IconButton onClick={handleAddItemClick}>
              <AddIcon />
            </IconButton>
            <Typography variant="h6">{totalPrice.toLocaleString()} THB</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}