import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmployeeTableDataSource, EmployeeTableItem } from './employee-table-datasource';

@Component({
  selector: 'project-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements AfterViewInit {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EmployeeTableItem>;
  dataSource: EmployeeTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['image', 'name', 'cargo', 'lotacao', 'scoreGeralEmp', 'options'];

  constructor() {
    this.dataSource = new EmployeeTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
