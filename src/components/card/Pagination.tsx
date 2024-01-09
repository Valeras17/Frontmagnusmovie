import { PaginationProps } from "../../interfaces/PaginationInterface";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination-container flex justify-center space-x-4 mt-4">
            
            <button 
                className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
                    currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
            >
                Prev
            </button>
            
            <span className="py-2 text-sm font-medium">{currentPage + 1}</span>
            
            <button 
                className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
                    currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
