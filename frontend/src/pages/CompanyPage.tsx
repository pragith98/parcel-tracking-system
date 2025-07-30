import { useEffect, useState } from "react";
import { FormStyles } from "../styles";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { getCompany, updateCompany } from "../store/company.slice";
import Alert from "../components/Alert";

function CompanyPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { company, error } = useSelector((state: RootState) => state.company);

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    if (company && !formData.name) {
      setFormData(company);
    }
  }, [company, formData.name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formDataValidate = (): boolean => {
    if (!formData.name.trim()) {
      alert("Company name is required.");
      return false;
    }
    if (!formData.telephone.trim()) {
      alert("Telephone is required.");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      alert("A valid email is required.");
      return false;
    }
    if (!formData.address.trim()) {
      alert("Address is required.");
      return false;
    }

    return true;
  };

  const onClickSave = () => {
    if (!formDataValidate()) return;
    dispatch(updateCompany(formData));
  };

  return (
    <div>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label className={FormStyles.formFieldLabel}>Company Name</label>
            <input
              name="name"
              type="text"
              className={FormStyles.formField}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={FormStyles.formFieldLabel}>Telephone</label>
            <input
              name="telephone"
              type="text"
              className={FormStyles.formField}
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={FormStyles.formFieldLabel}>Email</label>
            <input
              name="email"
              type="text"
              className={FormStyles.formField}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className={FormStyles.formFieldLabel}>Address</label>
          <textarea
            name="address"
            className={FormStyles.formField}
            rows={3}
            value={formData.address}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex justify-end mt-6">
          <div className="w-30">
            <Button variant="primary" onClick={onClickSave}>
              Save
            </Button>
          </div>
        </div>
      </form>

      {error && <Alert type="ERROR" message={error} />}
    </div>
  );
}

export default CompanyPage;
