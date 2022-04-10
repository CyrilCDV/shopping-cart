import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { getNextItem } from "./items";

const StatelessCounter = ({ count, incrementCount, decrementCount }) => {
  const [item, setItem] = useState(null);

  console.log("Rendering counter ", item);

  useEffect(() => {
    getNextItem().then((newItem) => {
      setItem(newItem);
    });
  }, []);

  const onClickIncrement = () => {
    incrementCount();
  };

  const onClickDecrement = () => {
    decrementCount();
  };

  if (!item) {
    return <CircularProgress />;
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {`${item}: ${count}`}
        <Button
          variant="outlined"
          onClick={onClickDecrement}
          disabled={count < 1}
        >
          Decrement
        </Button>
        <Button variant="outlined" onClick={onClickIncrement}>
          Increment
        </Button>
      </Card>
    </Box>
  );
};

export default StatelessCounter;
