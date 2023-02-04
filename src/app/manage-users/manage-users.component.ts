import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  fontStyleControl = new FormControl('');
  fontStyle?: string;
  columnDefs: ColDef[] = [
    { headerName: "UID", field: "uid" },
    { headerName: "Name", field: "name" },
    { headerName: "Date of Birth", field: "dob" },
    { headerName: "Class", field: "class" },
    { headerName: "Phone Number", field: "number" },
    { headerName: "Address", field: "address" }
  ];

  rowData = [
    { uid: "10", name: "Pratyush", dob: "02/08/2010", class: "8E", number: "+973 38172106", address: "123 Bannana Lane" }
  ];
}