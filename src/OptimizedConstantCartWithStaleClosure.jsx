import OptimizedStatelessCounter from "./OptimizedStatelessCounter";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useEffect, useState, useCallback } from "react";

const initialCounts = [0, 0, 0, 0, 0]

const OptimizedConstantCartWithStaleClosure = () => {
  console.log("Rendering OptimizedConstantCartWithStaleClosure");
  const [itemCounts, setItemCounts] = useState(initialCounts);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(itemCounts.reduce((prev, curr) => prev + curr, 0));
  }, [itemCounts]);

  const increment = useCallback((index) => {
    const newItemCounts = [...itemCounts];
    newItemCounts[index]++;
    setItemCounts(newItemCounts);
  }, []);

  const decrement = useCallback((index) => {
    const newItemCounts = [...itemCounts];
    newItemCounts[index]--;
    setItemCounts(newItemCounts);
  }, []);

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
          <OptimizedStatelessCounter
            key={index}
            index={index}
            count={count}
            incrementCount={increment}
            decrementCount={decrement}
          />
        );
      })}
    </Box>
  );
};

export default OptimizedConstantCartWithStaleClosure;
