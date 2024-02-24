import {ColumnDef} from '@tanstack/react-table';



export type Books = {
    id: string,
    title: string,
    author: string,
    genre: string,
    pubished_year:string,
    available_copies:string
}

export const columns: ColumnDef<Books>[] = [
  {
    accessorKey:"id",
    header:"ID",
  },
  {
    accessorKey:"title",
    header:"TITLE",
  },{
    accessorKey:"author",
    header:"AUTHOR"
  },
  {
    accessorKey:"genre",
    header:"GENRE"
  },
  {
    accessorKey:"published_year",
    header:"PUBLISHED YEAR"
  },
  {
    accessorKey:"available_copies",
    header:"AVAILABLE COPIES"
  }
]

