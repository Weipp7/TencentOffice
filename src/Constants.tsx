// Size of the headers and cells
export const HeaderHorizontalHeight = 20;
export const HeaderVerticalWidth = 40;
export const CellHeight = 23;
export const CellWidth = 80;

// Number of rows and columns per page
export const RowsPerPage = 50;
export const ColumnsPerPage = 20;

// Size of page
export const PageHeight = RowsPerPage * CellHeight;
export const PageWidth = ColumnsPerPage * CellWidth;

// Type of element
export enum DirectionType {
    VERTICAL,
    HORIZONTAL
}