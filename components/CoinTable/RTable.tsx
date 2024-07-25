import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";
import SearchBar from "../ui/search-bar";
import DropDown from "../ui/dropdown";

interface TableProps<T extends { id: string }> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

export function RTable<T extends { id: string }>({
  headers,
  data,
  renderRow,
}: TableProps<T>) {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/coin/${id}`);
  };

  return (
    <div>
      <div className=" md:flex justify-between mb-4 hidden">
        <SearchBar /> <DropDown />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                // className={index === headers.length - 1 ? "text-right" : ""}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-400/30 border-gray-400/20 transition-colors cursor-pointer h-8 max-h-8 truncate "
              onClick={() => handleRowClick(item.id)}
            >
              {renderRow(item)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
