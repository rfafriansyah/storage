import TableProduct from "../components/TableProduct";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* mainbar */}
      <TableProduct></TableProduct>
    </div>
  );
}
