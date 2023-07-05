import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import { returnValueOrDefault, returnValueOrDefaultNested, defaultSorting, defaultSortingOrder } from "../commonfunctions";
import IconButtonComponent from "../IconButton/IconButtonComponent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MoreHoriz } from "@mui/icons-material";

const getColor = (order, type, active) => {
  if (order === type || order === "") {
    return "disabled";
  }
  if (active) {
    return "";
  }
  return "disabled";
};

function stablesort(records, comparator) {
  const stablizedThis = records.map((el, index) => [el, index]);
  stablizedThis.sort((a, b) => {
    const neworder = comparator(a[0], b[0]);
    if (neworder !== 0) return neworder;
    return a[1] - b[1];
  });

  return stablizedThis.map((el) => el[0]);
}

function getComparator(sortOrder, sortOrderBy) {
  return sortOrder === "desc"
    ? (a, b) => descendingComparator(a, b, sortOrderBy)
    : (a, b) => -descendingComparator(a, b, sortOrderBy);
}

function descendingComparator(a, b, compOrder) {
  if (JSON.stringify(b[compOrder]) < JSON.stringify(a[compOrder])) {
    return -1;
  }
  if (JSON.stringify(b[compOrder]) > JSON.stringify(a[compOrder])) {
    return 1;
  }
  return 0;
}

const recordsAfterPagingandSorting = (currentRecordss, order, orderBy) => {
  return stablesort(currentRecordss, getComparator(order, orderBy));
};

const Icon = (newprops) => {
  const { orderColumn, orderBy, order } = newprops;
  const active = orderColumn === orderBy;
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        alignItems: "Center",
        paddingBottom: "10px",
      }}
    >
      <KeyboardArrowUpIcon sx={{ fontSize: "18px", marginBottom: "-8px" }} color={getColor(order, "desc", active)} />
      <KeyboardArrowDownIcon sx={{ fontSize: "18px", marginBottom: "-8px" }} color={getColor(order, "asc", active)} />
    </span>
  );
};

const DynamicTable = (props) => {
  const [order, setOrder] = useState(defaultSortingOrder(props.tableHeaders));
  const [orderBy, setOrderby] = useState(
    returnValueOrDefault(defaultSorting(props.tableHeaders), props.tableHeaders[0]?.property)
  );

  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(props.rows);
  }, [props.rows]);

  const handleSortingRequest = (cellId) => {
    const isAsc = (orderBy === cellId) & (order === "asc");
    if (isAsc) {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
    setOrderby(cellId);
  };

  if (rows?.length > 0) {
    return (
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow hover>
              {props.tableHeaders.map((header, index) => (
                <TableCell
                  component="th"
                  align="left"
                  id={index}
                  scope="row"
                  padding="normal"
                  key={header.property}
                  sortDirection={returnValueOrDefaultNested([orderBy === header.property], [order], false)}
                >
                  <Typography noWrap>
                    {/* {props.showSorting ? (
                      <TableSortLabel
                        active={returnValueOrDefaultNested([orderBy === header.property], [true], false)}
                        direction={returnValueOrDefaultNested([orderBy === header.property], [order], "asc")}
                        onClick={() => {
                          handleSortingRequest(header.property);
                        }}
                        IconComponent={<Icon orderColumn={header.property} orderBy={orderBy} order={order} />}
                      >
                        {header.title}
                      </TableSortLabel>
                    ) : header.title
                    } */}
                    {header.title}
                  </Typography>
                </TableCell>
              ))}
              <>
                {props.showFilter && (
                  <TableCell>
                    <IconButtonComponent title="More Actions" icon={<MoreHoriz />} />
                  </TableCell>
                )}
              </>
            </TableRow>
          </TableHead>
          <TableBody>
            {recordsAfterPagingandSorting(rows, order, orderBy).map((row, index) => {
              return (
                <TableRow key={`${row.id}_${index + 1}`}>
                  {props.tableHeaders.map((header) => {
                    return (
                      row.hasOwnProperty(header.property) && (
                        <TableCell key={header.property} align="left">
                          {row[header.property]}
                        </TableCell>
                      )
                    );
                  })}
                  <>
                    {props.showMoreButton && (
                      <TableCell>
                        <IconButtonComponent
                          title="More Actions"
                          icon={<MoreHoriz />}
                          handleClick={props.handleClick}
                          rowActionData={row.rowActionData}
                          rowId = {row._id}
                        />
                      </TableCell>
                    )}
                  </>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default DynamicTable;
