import { Button } from "@/Components/ui/Button";

type Props = {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  next: () => void;
  prev: () => void;
};

export default function PaginationControls({
  currentPage,
  totalPages,
  goToPage,
  next,
  prev,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 my-20 flex-wrap">
      <Button variant="outline" onClick={prev} disabled={currentPage === 1}>
        Prev
      </Button>

      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`
        px-4 py-2 rounded-md text-sm border transition
        ${
          isActive
            ? "bg-[#063c71] text-white border-[#063c71]"
            : "bg-white text-gray-700 border-gray-300 hover:border-[#063c71] hover:text-[#063c71]"
        }
      `}
          >
            {page}
          </button>
        );
      })}

      <Button
        variant="outline"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
