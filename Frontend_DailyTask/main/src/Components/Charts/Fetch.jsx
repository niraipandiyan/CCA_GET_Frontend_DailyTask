import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from "recharts";
import CustomizedMenus from "./Dropdown";


const DataComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/ce654693-2ba0-4528-b9f5-6d2d61be1bb4"
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer
      // className={classes.rechartsWrapper}
      width="100%"
      height="150%"
      aspect={3}
      // Optimized aspect ratio for better responsiveness
      resizeMode="container"
      // Resized based on container dimensions
      style={{
        padding: "20px",
        paddingBottom: "35px",
        borderRadius: "4px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CustomizedMenus />
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        style={{ margin: "10px", marginLeft: "0px" }}
      >
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#CB5EDC" />
            <stop offset="1" stopColor="#278EF1" />
          </linearGradient>
        </defs>
        <XAxis dataKey="service" tickLine={false} axisLine={false} />
        <YAxis
          dataKey="Cost"
          tickLine={false}
          axisLine={false}
          style={{ fontWeight: "bolder" }}
        />
        <CartesianGrid vertical={false} fill="none" />
        <Tooltip />

        <Bar
          on
          barSize={18}
          onMouseEnter={false}
          radius={3}
          type="monotone"
          dataKey="Cost"
          fill="#4584ED"
          stackId="1"
          activeBar={<Rectangle fill="url(#colorUv)" />}
        />
      </BarChart>

    </ResponsiveContainer>
  );
};

export default DataComponent;
