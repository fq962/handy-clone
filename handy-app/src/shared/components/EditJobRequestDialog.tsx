// import { useState } from "react";
import {
  DialogRoot,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Box,
  createListCollection,
  Input,
  Textarea,
  //   createListCollection,
} from "@chakra-ui/react";

import {
  DialogActionTrigger,
  DialogCloseTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { Field } from "@/components/ui/field";
import { Handymen, JobRequest, JobStatus } from "../interfaces/job.interface";
import { useJobRequestUpdate } from "@/core/hooks/UseJobRequestUpdate";
import { GetHandymen } from "@/core/services/Handymen";
import { GetStatus } from "@/core/services/JobRequest";

type EditDialogProps = {
  rowData: JobRequest;
  isOpen: boolean;
  onClose: () => void;
};

export const EditJobRequestDialog = ({
  rowData,
  isOpen,
  onClose,
}: EditDialogProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { updateJobRequest } = useJobRequestUpdate(onClose);
  const [handymen, setHandymen] = useState([] as Handymen[]);
  const [status, setStatus] = useState([] as JobStatus[]);

  // const [isOpen, setIsOpen] = useState(dialogOpen);

  // Estado único para el JSON
  const [jobRequestData, setJobRequestData] = useState({
    idJobRequest: rowData.idJobRequest,
    idStatus: rowData.status.value.toString(),
    idHandyman: rowData.handyman?.value || null,
    reservationDate: rowData.reservationDate,
    reservationTime: rowData.reservationTime,
    observations: rowData.observations,
  });

  // Manejador genérico para actualizar el JSON
  const handleChange = (field: string, value: unknown) => {
    setJobRequestData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const FetchHandymen = await GetHandymen();
        const FetchStatus = await GetStatus();

        if (FetchStatus) {
          setStatus(FetchStatus.data);
        }

        if (FetchHandymen) {
          setHandymen(FetchHandymen.data);
        }
      } catch (error) {
        console.error("Error in fetchHandymen:", error);
      }
    };

    fetchDropdowns();
  }, []);

  const handleSave = () => {
    updateJobRequest({
      idJobRequest: jobRequestData.idJobRequest,
      idStatus: Number(jobRequestData.idStatus),
      idHandyman: Number(jobRequestData.idHandyman),
      reservationDate: jobRequestData.reservationDate,
      reservationTime: jobRequestData.reservationTime,
      observations: jobRequestData.observations,
    });
  };

  return (
    <DialogRoot open={isOpen}>
      <DialogContent bgColor={"white"} ref={contentRef}>
        <DialogHeader color={"black"}>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <DialogBody color={"black"}>
          <Box mb={4}>
            <Field label="Status">
              <SelectRoot
                value={[jobRequestData.idStatus.toString()]}
                onValueChange={(e) => handleChange("idStatus", e.value[0])}
                collection={createListCollection({ items: status })}
              >
                <SelectTrigger>
                  <SelectValueText placeholder="Select status" />
                </SelectTrigger>
                <SelectContent bgColor={"white"} portalRef={contentRef}>
                  {status.map((op) => (
                    <SelectItem bgColor={"white"} key={op.value} item={op}>
                      {op.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Field>
          </Box>
          <Box mb={4}>
            <Field label="Handyman">
              <SelectRoot
                value={
                  jobRequestData.idHandyman
                    ? [jobRequestData.idHandyman.toString()]
                    : []
                }
                onValueChange={(e) => handleChange("idHandyman", e.value)}
                collection={createListCollection({
                  items: handymen.map((handyman) => handyman.handyman),
                })}
              >
                <SelectTrigger>
                  <SelectValueText placeholder="Select handyman" />
                </SelectTrigger>
                <SelectContent bgColor={"white"} portalRef={contentRef}>
                  {handymen.map((handyman) => (
                    <SelectItem
                      bgColor={"white"}
                      key={handyman.handyman.value}
                      item={handyman.handyman}
                    >
                      {handyman.handyman.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Field>
          </Box>
          <Box mb={4}>
            <Field label="Reservation Date">
              <Input
                type="date"
                value={jobRequestData.reservationDate}
                onChange={(e) =>
                  handleChange("reservationDate", e.target.value)
                }
              />
            </Field>
          </Box>
          <Box mb={4}>
            <Field label="Reservation Date">
              <Input
                type="time"
                value={jobRequestData.reservationTime}
                onChange={(e) =>
                  handleChange("reservationTime", e.target.value)
                }
              />
            </Field>
          </Box>
          <Box mb={4}>
            <Field label="Observations">
              <Textarea
                value={jobRequestData.observations}
                onChange={(e) => handleChange("observations", e.target.value)}
              />
            </Field>
          </Box>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
