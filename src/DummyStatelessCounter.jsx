import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { getNextItem } from "./items";

/**
 * Objectifs : 
 * 1. Récuperer le "count" à afficher depuis le composant parent
 * 2. Modifier le "count" à afficher via les boutons associés "Increment" et "Decrement"
 */
const DummyStatelessCounter = (props) => {
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(0);
  console.log("Rendering counter ", item);

  useEffect(() => {
    getNextItem().then((newItem) => {
      setItem(newItem);
    });
  }, []);

  const onClickMinus = () => {
    setCount((count) => count - 1);
  };

  const onClickPlus = () => {
    setCount((count) => count + 1);
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
        <Button variant="outlined" onClick={onClickMinus} disabled={count < 1}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={onClickPlus}>
          Increment
        </Button>
      </Card>
    </Box>
  );
};

export default DummyStatelessCounter;
