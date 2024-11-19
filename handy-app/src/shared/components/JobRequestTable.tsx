import React, { useState } from "react";
import { Table, Box } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { JobRequest } from "../interfaces/job.interface";
import { EditJobRequestDialog } from "./EditJobRequestDialog";
import { useJobRequests } from "@/core/hooks/JobRequestHook";
import Navbar from "../Navbar";

const JobRequestTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemRow, setItemRow] = useState({} as JobRequest);
  const { jobs, loading, error } = useJobRequests();

  const openModal = (item: JobRequest) => {
    setIsModalOpen(true);
    setItemRow(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemRow({} as JobRequest);
  };

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>{error}</Box>;

  return (
    <>
      <Navbar />
      <Box>
        <Table.Root size={"lg"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader>Handyman Assigned</Table.ColumnHeader>
              <Table.ColumnHeader>Reservation Date</Table.ColumnHeader>
              <Table.ColumnHeader>Reservation Time</Table.ColumnHeader>
              <Table.ColumnHeader>Observations</Table.ColumnHeader>
              <Table.ColumnHeader>Edit</Table.ColumnHeader>
              {/* <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader> */}
            </Table.Row>
          </Table.Header>
          <Table.Body bgColor={"white"} color={"black"}>
            {jobs.map((item) => (
              <Table.Row
                key={item.idJobRequest}
                bgColor={"white"}
                color={"black"}
              >
                <Table.Cell>{item.idJobRequest}</Table.Cell>
                <Table.Cell>{item.status.label}</Table.Cell>
                <Table.Cell>{item.handyman.label}</Table.Cell>
                <Table.Cell>{item.reservationDate}</Table.Cell>
                <Table.Cell>{item.reservationTime}</Table.Cell>
                <Table.Cell>{item.observations}</Table.Cell>
                <Table.Cell>
                  <Button
                    bgColor={"black"}
                    color={"white"}
                    size="sm"
                    onClick={() => openModal(item)} // Open the dialog with the selected row
                  >
                    Edit
                  </Button>
                </Table.Cell>
                {/* <Table.Cell>{}</Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        {isModalOpen && (
          <EditJobRequestDialog
            rowData={itemRow}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </Box>
    </>
  );
};

export default JobRequestTable;
