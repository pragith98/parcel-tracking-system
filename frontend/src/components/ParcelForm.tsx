import { useState } from "react";
import { FormStyles } from "../styles";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

interface ParcelFormProps {
  onClose: () => void;
}

function ParcelForm({ onClose }: ParcelFormProps) {
  const [isOpen, setOpen] = useState(true);
  const [formData, setFormData] = useState({
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
  });

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

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <div>
            <h1 className="text-xl font-bold mb-2">User</h1>

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
              </div>

              <div className="mt-6">
                <label className={FormStyles.formFieldLabel}>Remarks</label>
                <textarea
                  id="remarks"
                  className={FormStyles.formField}
                  rows={1}
                  onChange={handleTextAreaChange}
                />
              </div>
            </form>
          </div>

          <div className="mt-5 sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:items-center sm:justify-end w-full gap-5">
              <Button variant="outlined" onClick={onClickClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={onClickClose}>
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
