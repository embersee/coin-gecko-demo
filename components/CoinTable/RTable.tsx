import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

export function RTable<T>({ headers, data, renderRow }: TableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={index === headers.length - 1 ? "text-right" : ""}
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
            className="hover:bg-foreground/10 transition-colors"
          >
            {renderRow(item)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
