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
import { useRef, useState } from "react";
import { Field } from "@/components/ui/field";
import { JobRequest } from "../interfaces/job.interface";
import { useJobRequestUpdate } from "@/core/hooks/UseJobRequestUpdate";

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
  // const [isOpen, setIsOpen] = useState(dialogOpen);

  // Estado único para el JSON
  const [jobRequestData, setJobRequestData] = useState({
    idJobRequest: rowData.idJobRequest,
    idStatus: rowData.status.value,
    idHandyman: rowData.handyman.value,
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
                value={[jobRequestData.idStatus]}
                onValueChange={(e) => handleChange("idStatus", e.value[0])}
                collection={statusOptions}
              >
                <SelectTrigger>
                  <SelectValueText placeholder="Select status" />
                </SelectTrigger>
                <SelectContent bgColor={"white"} portalRef={contentRef}>
                  {statusOptions.items.map((op) => (
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
                value={[jobRequestData.idHandyman]}
                onValueChange={(e) => handleChange("idHandyman", e.value)}
                collection={handymanOptions}
              >
                <SelectTrigger>
                  <SelectValueText placeholder="Select handyman" />
                </SelectTrigger>
                <SelectContent bgColor={"white"} portalRef={contentRef}>
                  {handymanOptions.items.map((handyman) => (
                    <SelectItem
                      bgColor={"white"}
                      key={handyman.value}
                      item={handyman}
                    >
                      {handyman.label}
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
            <Field label="Reservation Date">
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

const statusOptions = createListCollection({
  items: [
    { value: "1", label: "Pending" },
    { value: "2", label: "In Progress" },
    { value: "3", label: "Completed" },
  ],
});

const handymanOptions = createListCollection({
  items: [
    { label: "David Fernando Quintanilla", value: "6" },
    { label: "Jane Smith", value: "2" },
    { label: "Mike Johnson", value: "3" },
  ],
});
