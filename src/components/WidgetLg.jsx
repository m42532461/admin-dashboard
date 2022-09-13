import React from "react";

const WidgetLg = () => {
  return (
    <div className="widgetLg flex flex-[2] shadow-lg p-5">
      <h3 className="widgetLgTilte text-[22px] font-semibold">
        Latest transactions
      </h3>
      <table className="widgetLgTable w-full border-[20px]">
        <tr className="widgetLgTr">
          <th className="widgetLgTh text-left">Customer</th>
          <th className="widgetLgTh text-left">Date</th>
          <th className="widgetLgTh text-left">Amount</th>
          <th className="widgetLgTh text-left">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="/"
              alt=""
              className="widgetLgImg mr-[10px] h-10 w-10 object-cover"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2021</td>
          <td className="widgetLgAmount font-light">$122.00</td>
          <td className="widgetLgStatus font-light">
            <button
              className="py-[5px] px-[7px] rounded-[10px] bg-[#e5faf2] text-[#3bb077]"
              type="Approved"
            >
              Approved
            </button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/" alt="" className="widgetLgImg mr-[10px]" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <button
              className="py-[5px] px-[7px] rounded-[10px] bg-[#fff0f1] text-[#d95087]"
              type="Declined"
            >
              Declined
            </button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/" alt="" className="widgetLgImg mr-[10px]" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <button
              className="py-[5px] px-[7px] rounded-[10px] bg-[#ebf1fe] text-[#2a7ade]"
              type="Pending"
            >
              Pending
            </button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/" alt="" className="widgetLgImg mr-[10px]" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <button
              className="py-[5px] px-[7px] rounded-[10px] bg-[#e5faf2]"
              type="Approved"
            >
              Approved
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
