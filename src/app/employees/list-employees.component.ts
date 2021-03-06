import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee.model";
import { EmployeeService } from "./employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employeeList: Employee[] = [
    {
      id: 1,
      name: "sara",
      gender: "female",
      age: 25,
      email: "sara@gmail.com",
      phone: 65666556,
      department: "IT",
      isactive: true,
      photopath: "assets/images/kitten1.jpeg"
    },
    {
      id: 2,
      name: "john",
      gender: "male",
      age: 20,
      email: "john@gmail.com",
      phone: 68787666556,
      department: "financial",
      isactive: true,
      photopath: "assets/images/kitten2.jpeg"
    },
    {
      id: 3,
      name: "zoe",
      gender: "female",
      age: 30,
      email: "zoe@gmail.com",
      phone: 65765656,
      department: "HR",
      isactive: true,
      photopath: "assets/images/kitten3.jpeg"
    }
  ];

  constructor(private router: Router, private service: EmployeeService) {}

  ngOnInit() {
    this.employeeList = this.service.getEmployees();
    console.log(this.employeeList);
  }

  deleteEmployee(employee) {
    let index = this.employeeList.indexOf(employee);
    this.employeeList.splice(index, 1);
  }

  editEmployee(employee) {
    this.router.navigate(["edit/" + employee.id]);
  }
}
