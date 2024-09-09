import React, { useContext } from "react";
import { BooksContext } from "../../context/bookContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Chart = () => {
  const { readBooks } = useContext(BooksContext);

  // Create data array for the chart
  const data = readBooks.map((book) => ({
    name: book.title,
    totalPages: book.totalPages,
  }));

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey={name} stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default Chart;
