import React, { useContext } from "react";
import { BooksContext } from "../../context/bookContext";
import { Line, LineChart } from "recharts";

const Chart = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
  }));
  console.log(data.totalPages);
  return (
    <div>
      <LineChart width={500} height={400} data={data.totalPages}>
        <Line dataKey="book"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
