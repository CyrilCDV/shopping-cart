import OptimizedStatelessCounter from "./OptimizedStatelessCounter";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useEffect, useState, useCallback } from "react";

const initialCounts = [0, 0, 0, 0, 0]

const OptimizedConstantCart = () => {
  console.log("Rendering OptimizedConstantCart");
  const [itemCounts, setItemCounts] = useState(initialCounts);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(itemCounts.reduce((prev, curr) => prev + curr, 0));
  }, [itemCounts]);

  const increment = useCallback((index) => {
    setItemCounts((oldItemCounts) => {
      const newItemCounts = [...oldItemCounts];
      newItemCounts[index]++;
      return newItemCounts
    });
  }, []);

  const decrement = useCallback((index) => {
    setItemCounts((oldItemCounts) => {
      const newItemCounts = [...oldItemCounts];
      newItemCounts[index]--;
      return newItemCounts
    });
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

export default OptimizedConstantCart;
