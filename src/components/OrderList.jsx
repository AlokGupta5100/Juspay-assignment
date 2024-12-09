import React from "react";
import searchIcon from "../assets/searchIcon.png";

const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const statusClasses = {
  "In Progress": "status-in-progress",
  Complete: "status-complete",
  Pending: "status-pending",
  Approved: "status-approved",
  Rejected: "status-rejected",
};

const OrderList = () => {
  return (
    <div className="order-list-container">
      <h2 className="order-list-title">Order List</h2>
      <div className="order-list-toolbar">
        <button className="toolbar-button">+</button>
        <div className="search-bar">
          <img src={searchIcon} alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <table className="order-list">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td className={statusClasses[order.status]}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">&lt;</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page} className="pagination-button">
            {page}
          </button>
        ))}
        <button className="pagination-button">&gt;</button>
      </div>
    </div>
  );
};

export default OrderList;
