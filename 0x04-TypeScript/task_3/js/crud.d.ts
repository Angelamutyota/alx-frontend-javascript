// Import types from the interface file
import { RowID, RowElement } from './interface';

// Declare the module by exporting the functions so they match ./crud.js when imported
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
