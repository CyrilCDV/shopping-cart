import StatelessCounter from "./StatelessCounter";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const initialCounts = [0, 0, 0, 0, 0]

const ConstantCart = () => {
  console.log("Rendering ConstantCart");
  const [itemCounts, setItemCounts] = useState(initialCounts);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(itemCounts.reduce((prev, curr) => prev + curr, 0));
  }, [itemCounts]);

  const increment = (index) => {
    const newItemCounts = [...itemCounts];
    newItemCounts[index]++;
    setItemCounts(newItemCounts);
  };

  const decrement = (index) => {
    const newItemCounts = [...itemCounts];
    newItemCounts[index]--;
    setItemCounts(newItemCounts);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: "10px",
      }}
    >
      <Card
        style={{
          width: "100px",
        }}
      >
        {`Total count: ${totalCount}`}
      </Card>
      {itemCounts.map((count, index) => {
        return (
          <StatelessCounter
            key={index}
            count={count}
            incrementCount={() => increment(index)}
            decrementCount={() => decrement(index)}
          />
        );
      })}
    </Box>
  );
};

export default ConstantCart;
