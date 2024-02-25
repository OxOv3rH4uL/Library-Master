import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Row } from '@tanstack/react-table';

export type BooksRow = Row<Books>;

export type Books = {
    id: string;
    title: string;
    author: string;
    genre: string;
    published_year: string;
    available_copies: string;
};

export const columns: ColumnDef<Books>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'TITLE',
  },
  {
    accessorKey: 'author',
    header: 'AUTHOR',
  },
  {
    accessorKey: 'genre',
    header: 'GENRE',
  },
  {
    accessorKey: 'published_year',
    header: 'PUBLISHED YEAR',
  },
  {
    accessorKey: 'available_copies',
    header: 'AVAILABLE COPIES',
  },
  {
    accessorKey: 'book',
    header: 'ACTION',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="bg-black text-white hover:bg-black hover:text-white"
        onClick={() => handleBorrow(row.original.id,row.original.title)}
      >
        <Link href="/book">Borrow</Link>
      </Button>
    ),
  },
];

const handleBorrow = (id: string,title :string) => {
  localStorage.setItem('bookId', id);
  localStorage.setItem('bookTitle', title);
};
