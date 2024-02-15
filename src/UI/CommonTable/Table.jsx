import React, { useState, useEffect } from "react";
import search from "./Assets/search.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import { useNavigate, useLocation } from "react-router-dom";

function Table({
  columns,
  data,
  pageSize,
  greenButtonText,
  greenButtonText2,
  greenButtonCMSDepthText2,
  blackButtonText,
  blackClicked,
  greenClicked,
  greenClickedSuspend,
  catgoryFilter,
  // onClick,
  // dataOg,
}) {
  const navigate = useNavigate();

  // const currentURL = window.location.href;

  const location = useLocation();
  // console.log(location.pathname);

  const equelAlluser = `/home/allUsers` === location.pathname;
  const equelDepartment = `/home/department` === location.pathname;
  const equelTransactionHistory =
    `/home/transactionHistory` === location.pathname;

  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const handleHeaderClick = (key) => {
    let direction = "ascending";

    // Check if the same column header is clicked for the third time
    if (sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
        direction = "descending";
      } else if (sortConfig.direction === "descending") {
        // Reset sorting configuration to original state
        direction = "ascending";
        key = null;
      }
    }

    setSortConfig({ key, direction });
  };

  let fData = data?.filter((row) =>
    Object?.values(row)?.some((value) =>
      value?.toString()?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
  );
  const [filteredData, setfilteredData] = useState(fData);

  useEffect(() => {
    console.log(filteredData);
    setfilteredData(fData);
  }, [searchTerm]);

  useEffect(() => {
    setfilteredData(fData);
  }, [data]);

  const ITEM_HEIGHT = 38;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // console.log(personName);
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleCatApply = async () => {
    console.log(personName);
    console.log(data);
    if (personName.length > 0) {
      let nr = data.filter((data) => personName.includes(data.userrole));
      let sdata = nr.filter((row) =>
        Object.values(row).some((value) =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setfilteredData(sdata);
      console.log(nr);
    }
    // console.log(filteredData);
    handleClose();
  };

  const handleClearSelection = () => {
    setPersonName([]);
  };
  const paginatedData = pageSize
    ? filteredData.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    : filteredData;

  const pageCount = pageSize ? Math.ceil(filteredData.length / pageSize) : 1;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    boxShadow: 24,
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "15px 30px",
  };
  localStorage.setItem("autoClickApply", "true");

  useEffect(() => {
    const applyButton = document.getElementById("applycat");

    if (applyButton) {
      applyButton.click();
      console.log("apply button clicked");
    }
  }, []);

  const sortedData = [...paginatedData].sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (typeof valueA === "number" && typeof valueB === "number") {
      if (valueA < valueB) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }

    // If not numbers, compare as strings
    if (valueA < valueB) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <>
      {catgoryFilter ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div style={style}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                className="text-gray-900"
              >
                Filter
              </h2>
              <div className="my-3">
                <FormControl className="w-full">
                  <InputLabel id="demo-multiple-checkbox-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select category" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {catgoryFilter.map((name, index) => (
                      <MenuItem key={index} value={name.role}>
                        <Checkbox
                          checked={personName.indexOf(name.role) > -1}
                        />
                        <ListItemText primary={name.role} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="flex justify-between mt-4">
                  <div>
                    <Button
                      onClick={() => {
                        handleClearSelection();
                        setfilteredData(data);
                        handleClose();
                      }}
                      variant="contained"
                      size="large"
                      color="error"
                    >
                      Clear
                    </Button>
                  </div>
                  <div>
                    <Button
                      id="applycat"
                      onClick={handleCatApply}
                      variant="contained"
                      size="large"
                      color="themeColor"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : null}
      <div className="p-5 table-container">
        <div className="flex justify-between items-center mb-5">
          <div className="flex justify-between items-center w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="shadow-md border-gray-100 border-2 rounded-md py-3 pl-5 pr-10 w-full"
              onChange={handleSearchChange}
            />
            <img
              src={search}
              alt="search"
              className="relative  right-10 pointer-events-auto"
              // className="  top-3 pointer-events-auto"
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            {/* ----------------Order Management button--------------- */}

            {equelTransactionHistory ? (
              <div>
                <button
                  onClick={() => navigate("/home/CreateOrder")}
                  className="bg-[blue] rounded hover:bg-[#c91b0e] text-white w-auto font-bold py-3 px-8 rounded-sm"
                >
                  Create Order
                </button>
              </div>
            ) : (
              <></>
            )}

            {/* filter  */}

            {catgoryFilter && (
              <div>
                <IconButton color="" onClick={handleOpen} size="large">
                  <FilterAltIcon />
                </IconButton>
              </div>
            )}

            {blackButtonText && (
              <>
                <div>
                  <button
                    onClick={blackClicked}
                    className="bg-[#2B2B2B] rounded hover:bg-gray-600 w-auto text-white font-bold py-3 px-8 rounded-sm"
                  >
                    {blackButtonText}
                  </button>
                </div>
              </>
            )}
            {greenButtonText && (
              <>
                {equelDepartment ? (
                  <div>
                    <button
                      onClick={() => navigate("/home/permission")}
                      className="bg-[blue] rounded hover:bg-[#c91b0e] text-white w-auto font-bold py-3 px-8 rounded-sm"
                    >
                      {greenButtonCMSDepthText2}
                    </button>
                  </div>
                ) : (
                  <></>
                )}

                {equelAlluser ? (
                  <div>
                    <button
                      onClick={greenClickedSuspend}
                      className="bg-[green] rounded hover:bg-[#c91b0e] text-white w-auto font-bold py-3 px-8 rounded-sm"
                    >
                      {greenButtonText2}
                    </button>
                  </div>
                ) : (
                  <></>
                )}

                <div>
                  <button
                    onClick={greenClicked}
                    className="bg-[#c93a0e] rounded hover:bg-[#c91b0e] text-white w-auto font-bold py-3 px-8 "
                  >
                    {greenButtonText}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className="rounded-xl border border-[#CACACA] bg-[#FFFFFF] overflow-hidden"
          style={{ paddingTop: 5 }}
        >
          <table className="table w-full table-auto text-left  rounded-lg">
            <thead className="h-10">
              <tr className=" text-[#118615] border-b border-b-[#CACACA] rounded-lg ">
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    onClick={() => handleHeaderClick(column.accessor)}
                    className="px-5 py-2 cursor-pointer "
                  >
                    {column.header}
                    {sortConfig.key === column.accessor && (
                      <span className="ml-1 text-white">
                        {sortConfig.direction === "ascending" ? (
                          <SwitchLeftIcon className="rotate-90  text-green-300" />
                        ) : sortConfig.direction === "descending" ? (
                          <SwitchLeftIcon className="-rotate-90 text-green-300" />
                        ) : (
                          ""
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="rounded-lg">
              {sortedData.map((row, index) => (
                <tr
                  key={index}
                  className={`bg-${index % 2 === 0 ? "[#EBF5EB]" : ""}`}
                >
                  {columns?.map((column) => (
                    <td key={column.accessor} className="px-5 py-2">
                      {row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pageSize && (
          <div className="pagination absolute left-0 right-0 flex justify-end p-5 gap-3">
            <button
              className={`px-4 border-2 rounded-md ${
                currentPage === 0
                  ? "bg-[#DDDEF9] text-gray-500 cursor-default"
                  : "bg-white text-gray-700 "
              }`}
              disabled={currentPage === 0}
              onClick={handlePreviousPage}
            >
              {"<"} Prev
            </button>
            <span className="px-4 py-2">{`${
              currentPage + 1
            } - ${pageCount}`}</span>
            <button
              className={`px-4 border-2 rounded-md ${
                currentPage === pageCount - 1
                  ? "bg-[#DDDEF9] text-gray-500 cursor-default"
                  : "bg-white text-gray-700"
              }`}
              disabled={currentPage === pageCount - 1}
              onClick={handleNextPage}
            >
              Next {">"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Table;
