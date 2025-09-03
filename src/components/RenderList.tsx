import {motion} from "framer-motion"
type Props = {
  id: number;
  description: string;
  status: boolean;
  onDelete: (id: number) => void;
  onMarkDown: (id: number) => void;
};

const RenderList: React.FC<Props> = ({
  id,
  description,
  status,
  onDelete,
  onMarkDown,
}) => {
  return (
    <motion.div className="d-flex align-items-center justify-content-between border rounded p-2 mb-2"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Task text on left */}
      <span>{description}</span>

      {/* Buttons on right */}
      <div className="d-flex gap-2">
        <button className={`btn ${status ? "btn-success" : "btn-secondary"}`}>
          {status ? "Completed" : "Pending"}
        </button>

        {!status && (
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => onMarkDown(id)}
          >
            ✅
          </button>
        )}

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onDelete(id)}
        >
          🗑️
        </button>
      </div>
    </motion.div>
  );
};

export default RenderList;
