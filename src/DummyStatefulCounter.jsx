import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

/**
 * Objectifs : 
 * 1. Gérer un état interne "count", avec les boutons associés "Increment" et "Decrement"
 * 2. Récupérer l'item à afficher via "getNextItem" dasn "./items"
 * 3. Ne pas authoriser un "count" inférieur à 0
 */
const DummyStatefulCounter = () => {
  console.log("Rendering DummyCounter");

  const item = "Book"; // A modifier
  const count = 0; // A modifier
  
  const onClickDecrement = () => {
    console.log("Decrement"); // A modifier
  };

  const onClickIncrement = () => {
    console.log("Increment"); // A modifier
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
        gap: "10px"
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px"
        }}
      >
        {`${item}: ${count}`}
        <Button variant="outlined" onClick={onClickDecrement} disabled={false /* A modifier */}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={onClickIncrement}>
          Increment
        </Button>
      </Card>
    </Box>
  );
};

export default DummyStatefulCounter;
