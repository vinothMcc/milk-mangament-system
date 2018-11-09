import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-collection-list",
  templateUrl: "./collection-list.component.html",
  styleUrls: ["./collection-list.component.scss"]
})
export class CollectionListComponent implements OnInit {
  sheetName = "paymentCustomerDetails";
  page = "paymentDetails";
  collectionData = [];
  displayedColumns: string[] = [
    "customer_name",
    "total",
    "grant_total",
    "paid",
    "edit",
    "history"
  ];
  dataSource;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private http: HttpService) {}
  ngOnInit() {
    this.collectionList();
  }

  collectionList() {
    const sheetParams =
      "action=read&sheet_name=" + this.sheetName + "&page=" + this.page;
    this.http.apiGet(sheetParams).subscribe(data => {
      this.collectionData = data["records"];
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.collectionData;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log(this.dataSource);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  updateAmount(amountValue: number, id: string) {
    console.log(amountValue, id);
  }
}
