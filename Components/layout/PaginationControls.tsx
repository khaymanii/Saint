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
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      <Button variant="outline" onClick={prev} disabled={currentPage === 1}>
        Prev
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          onClick={() => goToPage(page)}
        >
          {page}
        </Button>
      ))}

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
