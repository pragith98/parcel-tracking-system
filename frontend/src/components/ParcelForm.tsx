import { useEffect, useState } from "react";
import { FormStyles } from "../styles";
import ModalWindow from "./ModalWindow";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import {
  addNewParcel,
  resetSelectedParcel,
  updateParcel,
} from "../store/parcel.slice";
import { addUserEvent } from "../store/user-event.slice";
import { UserEvents } from "../constants/user-events";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

interface ParcelFormProps {
  onClose: () => void;
}

function ParcelForm({ onClose }: ParcelFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { current } = useSelector((state: RootState) => state.parcel);
  const [isOpen, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    receiverName: "",
    receiverTelephone: "",
    receiverEmail: "",
    receiverAddress: "",
    receiverCity: "",
    senderName: "",
    senderTelephone: "",
    senderEmail: "",
    senderAddress: "",
    senderCity: "",
    remarks: "",
    estimatedDeliveryDate: null as Date | null | string,
  });

  useEffect(() => {
    if (current) {
      setFormData({
        id: current.id,
        receiverName: current.receiverName,
        receiverTelephone: current.receiverTelephone,
        receiverEmail: current.receiverEmail,
        receiverAddress: current.receiverAddress,
        receiverCity: current.receiverCity,
        senderName: current.senderName,
        senderTelephone: current.senderTelephone,
        senderEmail: current.senderEmail,
        senderAddress: current.senderAddress,
        senderCity: current.senderCity,
        remarks: current.remarks,
        estimatedDeliveryDate: current.estimatedDeliveryDate ?? "",
      });
    }

    return () => {
      dispatch(resetSelectedParcel());
      dispatch(addUserEvent(UserEvents.NONE));
    };
  }, [current, dispatch]);

  const onClickClose = () => {
    setOpen(false);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formDataValidate = (): boolean => {
    if (!formData.receiverName.trim()) {
      alert("Receiver name is required.");
      return false;
    }
    if (!formData.receiverTelephone.trim()) {
      alert("Receiver telephone is required.");
      return false;
    }
    if (
      !formData.receiverEmail.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.receiverEmail)
    ) {
      alert("A valid receiver email is required.");
      return false;
    }
    if (!formData.receiverAddress.trim()) {
      alert("Receiver address is required.");
      return false;
    }
    if (!formData.receiverCity.trim()) {
      alert("Receiver city is required.");
      return false;
    }
    if (!formData.senderName.trim()) {
      alert("Sender name is required.");
      return false;
    }
    if (!formData.senderTelephone.trim()) {
      alert("Sender telephone is required.");
      return false;
    }
    if (
      !formData.senderEmail.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.senderEmail)
    ) {
      alert("A valid sender email is required.");
      return false;
    }
    if (!formData.senderAddress.trim()) {
      alert("Sender address is required.");
      return false;
    }
    if (!formData.senderCity.trim()) {
      alert("Sender city is required.");
      return false;
    }

    return true;
  };

  const onClickSubmit = () => {
    if (!formDataValidate()) return;

    if (formData.id) {
      dispatch(
        updateParcel({
          id: formData.id,
          receiverName: formData.receiverName,
          receiverTelephone: formData.receiverTelephone,
          receiverEmail: formData.receiverEmail,
          receiverAddress: formData.receiverAddress,
          receiverCity: formData.receiverCity,
          senderName: formData.senderName,
          senderTelephone: formData.senderTelephone,
          senderEmail: formData.senderEmail,
          senderAddress: formData.senderAddress,
          senderCity: formData.senderCity,
          remarks: formData.remarks,
          estimatedDeliveryDate: formData.estimatedDeliveryDate
            ? format(formData.estimatedDeliveryDate, "yyyy-MM-dd")
            : "",
        })
      );
    } else {
      dispatch(addNewParcel(formData));
    }

    onClickClose();
  };

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <div>
            <h1 className="text-xl font-bold mb-2">
              {formData.id ? "Parcel" : "Create Parcel"}
            </h1>

            <form>
              <h1 className={FormStyles.formSectionTitle}>Receiver Details</h1>
              <div className="grid gap-6 mt-4 grid-cols-3 w-full">
                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Receiver Name
                  </label>
                  <input
                    name="receiverName"
                    autoFocus={true}
                    type="text"
                    value={formData.receiverName}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Receiver Telephone
                  </label>
                  <input
                    name="receiverTelephone"
                    type="text"
                    value={formData.receiverTelephone}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Receiver Email
                  </label>
                  <input
                    name="receiverEmail"
                    type="text"
                    value={formData.receiverEmail}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid gap-6 mt-4 grid-cols-2 w-full">
                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Receiver Address
                  </label>
                  <input
                    name="receiverAddress"
                    type="text"
                    value={formData.receiverAddress}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Receiver City
                  </label>
                  <input
                    name="receiverCity"
                    type="text"
                    value={formData.receiverCity}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <h1 className={FormStyles.formSectionTitle}>Sender Details</h1>
              <div className="grid gap-6 mt-4 grid-cols-3 w-full">
                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Sender Name
                  </label>
                  <input
                    name="senderName"
                    type="text"
                    value={formData.senderName}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Sender Telephone
                  </label>
                  <input
                    name="senderTelephone"
                    type="text"
                    value={formData.senderTelephone}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Sender Email
                  </label>
                  <input
                    name="senderEmail"
                    type="text"
                    value={formData.senderEmail}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid gap-6 mt-4 grid-cols-2 w-full">
                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Sender Address
                  </label>
                  <input
                    name="senderAddress"
                    type="text"
                    value={formData.senderAddress}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className={FormStyles.formFieldLabel}>
                    Sender City
                  </label>
                  <input
                    name="senderCity"
                    type="text"
                    value={formData.senderCity}
                    className={FormStyles.formField}
                    onChange={handleInputChange}
                  />
                </div>

                {formData.id && (
                  <div>
                    <label className={FormStyles.formFieldLabel}>
                      Estimated Deliver Date
                    </label>
                    <DatePicker
                      name="estimatedDeliveryDate"
                      selected={formData.estimatedDeliveryDate as Date}
                      onChange={(date: Date | null) =>
                        setFormData((prev) => ({
                          ...prev,
                          estimatedDeliveryDate: date,
                        }))
                      }
                      className="block w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Select a date"
                    />
                  </div>
                )}

                <div>
                  <label className={FormStyles.formFieldLabel}>Remarks</label>
                  <textarea
                    name="remarks"
                    className={FormStyles.formField}
                    value={formData.remarks}
                    rows={1}
                    onChange={handleTextAreaChange}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="mt-5 sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:items-center sm:justify-end w-full gap-5">
              <Button variant="outlined" onClick={onClickClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={onClickSubmit}>
                Save
              </Button>
            </div>
          </div>
        </ModalWindow>
      )}
    </>
  );
}

export default ParcelForm;
