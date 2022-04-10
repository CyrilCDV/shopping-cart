import DummyStatelessCounter from "./DummyStatelessCounter";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

/**
 * Objectifs : 
 * 1. Transmettre le "count" à chaque enfant
 * 2. Donner la possibilité à chaque enfant de modifier son count
 * 3. Afficher le "count" total
 */
const DummyConstantCart = () => {
  console.log("Rendering DummyConstantCart");
  const itemCounts = [0, 0, 0, 0, 0];
  const totalCount = 0;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: "10px"
      }}
      >
      <Card
        style={{
          width: "100px"
        }}
      >
        {`Total count: ${totalCount}`}
      </Card>
      {itemCounts.map((count) => {
        return <DummyStatelessCounter />;
      })}
    </Box>
  );
};

export default DummyConstantCart;
