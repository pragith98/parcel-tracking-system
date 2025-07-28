import { FormStyles } from "../styles";

function CompanyPage() {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label className={FormStyles.formFieldLabel}>Company Name</label>
            <input id="name" type="text" className={FormStyles.formField} />
          </div>

          <div>
            <label className={FormStyles.formFieldLabel}>Telephone</label>
            <input
              id="telephone"
              type="text"
              className={FormStyles.formField}
            />
          </div>

          <div>
            <label className={FormStyles.formFieldLabel}>Email</label>
            <input id="email" type="text" className={FormStyles.formField} />
          </div>
        </div>

        <div className="mt-6">
          <label className={FormStyles.formFieldLabel}>Address</label>
          <textarea
            id="address"
            className={FormStyles.formField}
            rows={3}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CompanyPage;
