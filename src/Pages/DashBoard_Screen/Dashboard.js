import React, { useEffect, useState } from "react";
import Card from "./Component/Card";
import { Active, Inactive, Charger, Usersicon } from "./Assets";

import Chart from "./Component/Chart";
import TopHeader from "../../UI/TopHeader/TopHeader";
import { Dashmap } from "./Component/Dashmap";
import SearchIcon from "@mui/icons-material/Search";
import Dashboard_Header from "./Component/Dashboard_Header";

const Dashboard = () => {
  const head = "Dashboard";

  const data = [
    { id: "02158", status: "Completed", remarks: "Pending" },
    { id: "02159", status: "In Progress", remarks: "Not Started" },
    { id: "02160", status: "Pending", remarks: "Delayed" },
    { id: "02161", status: "Completed", remarks: "In Review" },
    { id: "02162", status: "In Progress", remarks: "On Track" },
    { id: "02163", status: "Pending", remarks: "Awaiting Approval" },
    { id: "02164", status: "Completed", remarks: "Pending" },
    { id: "02165", status: "In Progress", remarks: "Not Started" },
    { id: "02166", status: "Pending", remarks: "Delayed" },
    { id: "02167", status: "Completed", remarks: "In Review" },
    { id: "02168", status: "Completed", remarks: "Pending" },
    { id: "02169", status: "In Progress", remarks: "On Track" },
    { id: "02170", status: "Pending", remarks: "Awaiting Approval" },
    { id: "02171", status: "Completed", remarks: "Pending" },
    { id: "02172", status: "In Progress", remarks: "Not Started" },
    { id: "02173", status: "Pending", remarks: "Delayed" },
    { id: "02174", status: "Completed", remarks: "In Review" },
    { id: "02175", status: "Completed", remarks: "Pending" },
    { id: "02176", status: "In Progress", remarks: "On Track" },
  ];

  const [search, setserach] = useState();
  const [alldata, setalldata] = useState(data);

  // useEffect(() => {
  //   if (search) {
  //     const user = data.find((element) => element.id === search);
  //     if (user) {
  //       console.log(user);
  //       setalldata([user]);
  //     }
  //   } else {
  //     setalldata(data);
  //   }
  // }, [search]);

  const handaleSearch = () => {
    console.log(search);
    const user = data.find((element) => element.id === search);
    if (user === undefined) {
      console.log(user, "no data found");
    } else {
      console.log(user);
      setalldata([user]);
    }
  };

  useEffect(() => {
    if (!search) {
      setalldata(data);
    }
  }, [search]);

  return (
    <div className="w-full mx-5">
      <div className="flex">
        <TopHeader className="" head={head} />
      </div>
      <div className="mt-10 w-full">
        <Dashboard_Header head={head} />
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 justify-items-center">
          <div className="mb-4">
            <Card
              title={"195"}
              subtitle={"Tatal Users"}
              icon={Usersicon}
              color={"bg-[#1807ad]"}
            />
          </div>
          <div className="mb-4">
            <Card
              title={"114"}
              subtitle={"Total Chargers"}
              icon={Charger}
              color={"bg-[#7307ad]"}
            />
          </div>
          <div className="mb-4">
            <Card
              title={"88"}
              subtitle={"Active Chargers"}
              icon={Active}
              color={"bg-[#7d7880]"}
            />
          </div>
          <div className="mb-4">
            <Card
              title={"74"}
              subtitle={"Inactive Chargers"}
              icon={Inactive}
              color={"bg-[#e0142f]"}
            />
          </div>
        </div>
        <div className="md:flex w-full mt-5 md:gap-8">
          <div className="md:w-1/2 rounded-3xl border border-1 border-[#118615]  bg-[#FFF]">
            <div className="flex justify-between items-center h-16 relative ">
              <div className="ml-20 text-2xl w text-[#118615] font-bold ">
                <p>Overall Positions</p>
              </div>
              <div
                style={{ marginRight: -5, marginTop: -5 }}
                className="flex absolute right-0 top-0 h-16 rounded-2xl py-1 w-64  items-center  bg-[#fff]  border-t-1 border-t-[#fff] border-r-1 border-r-[#fff] border border-1 border-[#118615]"
              >
                <input
                  className="ml-2 pl-3 h-8 w-auto text-sm bg-[#F5F5F5] outline-none"
                  type="text"
                  maxLength={5}
                  value={search}
                  onChange={(e) => setserach(e.target.value)}
                  placeholder="Search Particular by id"
                />
                <span
                  onClick={handaleSearch}
                  className="bg-[#118615] rounded-sm"
                >
                  <SearchIcon className="text-[#fff] " />
                </span>
              </div>
            </div>

            <div className="max-h-96 border-2 rounded-2xl  overflow-hidden shadow-xl m-5">
              <div className="grid grid-cols-3 border-b-2 border-[#C8BFBF] text-center rounded-t-2xl text-[#118615] text-xl bg-[#fff]">
                <span className="p-2">ID</span>
                <span className="p-2 border-x-2 border-[#C8BFBF]">Status</span>
                <span className="p-2">Remarks</span>
              </div>
              <div className="h-80 overflow-auto ">
                {alldata.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 text-center bg-[#C1E0C2] text-[#575757] h-8 rounded-xl my-3 mx-5"
                  >
                    <span className="flex justify-center items-center">
                      {item.id}
                    </span>
                    <span className="flex justify-center items-center">
                      {item.status}
                    </span>
                    <span className="flex justify-center items-center">
                      {item.remarks}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0  rounded-xl border border-1 border-[#118615] bg-[#FFF]">
            <div className="w-full py-2 text-[#118615] font-bold text-2xl text-center">
              <h1>Distribution Across India</h1>
              <div className="m-5 border border-1 border-[#EBEBEB] shadow-lg rounded-3xl">
                <Dashmap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <Chart
            heading="Total Active Users"
            fields={[
              {
                name: "Today's active users",
                value: 60,
              },
              {
                name: "Yesterday's active users",
                value: 25,
              },
              {
                name: "Tomorrow's active users",
                value: 10,
              },
              {
                name: "Last Month's active users",
                value: 10,
              },
            ]}
          />
          <Chart
            heading="Total Active bookings"
            fields={[
              {
                name: "Today's active bookings",
                value: 60,
              },
              {
                name: "Yesterday's active bookings",
                value: 25,
              },
              {
                name: "Tomorrow's active bookings",
                value: 10,
              },
              {
                name: "Last Month's active bookings",
                value: 10,
              },
            ]}
          /> */
}
