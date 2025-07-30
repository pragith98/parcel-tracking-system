import { useEffect, useState, type MouseEvent } from "react";
import { TableStyles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import {
  getParcels,
  removeParcel,
  selectParcelById,
} from "../store/parcel.slice";
import { UserEvents } from "../constants/user-events";
import Alert from "../components/Alert";
import Button from "../components/Button";
import ParcelForm from "../components/ParcelForm";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type JobType = "NOT_COMPLETED" | "COMPLETED";

function AllParcelsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, error, lastPage, currentPage, totalItems } = useSelector(
    (state: RootState) => state.parcel
  );
  const { currentUserEvent } = useSelector(
    (state: RootState) => state.userEvent
  );
  const [isFormOpen, setFormOpen] = useState(false);
  const [jobType, setJobType] = useState<JobType>("NOT_COMPLETED");

  useEffect(() => {
    dispatch(
      getParcels({
        filterTerms: {
          completed: jobType,
          senderName: undefined,
          senderTelephone: undefined,
          senderAddress: undefined,
          senderCity: undefined,
          receiverName: undefined,
          receiverTelephone: undefined,
          receiverAddress: undefined,
          receiverCity: undefined,
          code: undefined,
          pickedUpAt: undefined,
          deliveredAt: undefined,
          createdAt: undefined,
        },
      })
    );
  }, [jobType, dispatch]);

  useEffect(() => {
    if (currentUserEvent === UserEvents.OPEN_PARCEL_FORM) {
      onTriggerOpenForm();
    }
  }, [currentUserEvent]);

  const onTriggerOpenForm = () => {
    setFormOpen(true);
  };

  const onClickTab = (type: JobType) => {
    setJobType(type);
  };

  const onClickSelectItem = (id: string) => {
    dispatch(selectParcelById(id));
    onTriggerOpenForm();
  };

  const onClickDelete = (id: string, event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(removeParcel(id));
  };

  const onClickNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= lastPage) {
      dispatch(getParcels({ pagination: { page: nextPage, limit: 10 } }));
    }
  };

  const onClickPreviousPage = () => {
    const previouse = currentPage - 1;
    if (previouse >= 1) {
      dispatch(getParcels({ pagination: { page: previouse, limit: 10 } }));
    }
  };

  const createTable = () => {
    return (
      <div>
        {error && <Alert type="ERROR" message={error} />}

        <table className={TableStyles.table}>
          <thead className={TableStyles.header}>
            <tr>
              <th scope="col" className={TableStyles.headerRow}>
                <span>Sender Name</span>
              </th>

              <th scope="col" className={TableStyles.headerRow}>
                <span>Sender Telephone</span>
              </th>

              <th scope="col" className={TableStyles.headerRow}>
                <span>Receiver Name</span>
              </th>

              <th scope="col" className={TableStyles.headerRow}>
                <span>Receiver Telephone</span>
              </th>

              <th scope="col" className={TableStyles.headerRow}>
                <span>Code</span>
              </th>

              <th scope="col" className={TableStyles.headerRow}></th>
            </tr>
          </thead>

          <tbody className={TableStyles.body}>
            {list.map((item) => (
              <tr
                className={TableStyles.row}
                key={item.id}
                onClick={() => onClickSelectItem(item.id)}
              >
                <td className={TableStyles.data}>
                  <span>{item.senderName}</span>
                </td>

                <td className={TableStyles.data}>
                  <span>{item.senderTelephone}</span>
                </td>

                <td className={TableStyles.data}>
                  <span>{item.receiverName}</span>
                </td>

                <td className={TableStyles.data}>
                  <span>{item.receiverTelephone}</span>
                </td>

                <td className={TableStyles.data}>
                  <span>{item.code}</span>
                </td>

                <td className={TableStyles.data}>
                  <div className="w-20">
                    <Button
                      variant="danger"
                      onClick={(e) => onClickDelete(item.id, e)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 whitespace-nowrap ">
        <button
          className={jobType === "NOT_COMPLETED" ? tabActiveStyle : tabStyles}
          onClick={() => onClickTab("NOT_COMPLETED")}
        >
          New / Ongoing Jobs
        </button>

        <button
          className={jobType === "COMPLETED" ? tabActiveStyle : tabStyles}
          onClick={() => onClickTab("COMPLETED")}
        >
          Completed Jobs
        </button>
      </div>

      {createTable()}

      {/* Pagination */}
      <div className="flex items-center gap-x-1">
        <button
          type="button"
          className="min-h-8 min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
          aria-label="Previous"
          onClick={onClickPreviousPage}
        >
          <MdNavigateBefore />
        </button>
        <div className="flex items-center gap-x-1">
          <span className="min-h-8 min-w-8 flex justify-center items-center border border-gray-200 text-gray-800 py-1 px-3 text-sm rounded-full focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
            {currentPage}
          </span>
          <span className="min-h-8 flex justify-center items-center text-gray-500 py-1.5 px-1.5 text-sm ">
            of
          </span>
          <span className="min-h-8 flex justify-center items-center text-gray-500 py-1.5 px-1.5 text-sm ">
            {lastPage}
          </span>
        </div>
        <button
          type="button"
          className="min-h-8 min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
          aria-label="Next"
          onClick={onClickNextPage}
        >
          <MdNavigateNext />
        </button>

        <span className="text-sm text-gray-400">Total Items {totalItems}</span>
      </div>

      {isFormOpen && <ParcelForm onClose={() => setFormOpen(false)} />}
    </div>
  );
}

const tabActiveStyle = `
  inline-flex 
  items-center 
  h-10 
  px-4 -mb-px 
  text-sm 
  text-center 
  text-blue-600 
  bg-transparent 
  border-b-2 
  border-blue-500 
  sm:text-base  
  whitespace-nowrap 
  focus:outline-none
`;

const tabStyles = `
  inline-flex 
  items-center 
  h-10 
  px-4 -mb-px 
  text-sm 
  text-center 
  text-gray-700 
  bg-transparent 
  border-b-2 
  border-transparent 
  sm:text-base  
  whitespace-nowrap 
  cursor-base 
  focus:outline-none 
  hover:border-gray-400
`;

export default AllParcelsPage;
