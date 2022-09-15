import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  return (
    <div className="widgetLg flex-col flex-[2] shadow-lg p-5">
      <h3 className="widgetLgTilte text-[22px] font-semibold">
        Latest transactions
      </h3>
      <table className="widgetLgTable w-full m-[20px]">
        <tr className="widgetLgTr">
          <th className="widgetLgTh text-left">Customer</th>
          <th className="widgetLgTh text-left">Date</th>
          <th className="widgetLgTh text-left">Amount</th>
          <th className="widgetLgTh text-left">Status</th>
        </tr>
        {Array.isArray(orders) ? (
          orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser flex items-center font-semibold">
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate font-light">
                {format(order.createdAt)}
              </td>
              <td className="widgetLgAmount font-light">${order.amount}</td>
              <td className="widgetLgStatus font-light">
                <button
                  className="py-[5px] px-[7px] rounded-[10px] bg-[#e5faf2] text-[#3bb077]"
                  type="Approved"
                >
                  {order.status}
                </button>
              </td>
            </tr>
          ))
        ) : (
          <></>
        )}
      </table>
    </div>
  );
};

export default WidgetLg;
