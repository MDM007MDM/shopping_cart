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
      <Grid size={{xs:4, md:2}}>
        <img src={imageUrl} alt={itemname} style={{ width: "300px", height: "300px", borderRadius: "300px" }} />
      </Grid>
      <Grid size={{xs:10, md:12}}>
        <Stack spacing={1}>
          <Typography variant="h6">{itemname}</Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
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
