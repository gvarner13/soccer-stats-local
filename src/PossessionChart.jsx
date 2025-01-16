import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data02 = [
  { name: "Team A", value: 35 },
  { name: "Team B", value: 56 },
];

export default function PossessionChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={384} height={384}>
        <Pie
          dataKey="value"
          data={data02}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
