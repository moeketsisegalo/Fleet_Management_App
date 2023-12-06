import { Component, OnInit } from '@angular/core';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  status: string;
}

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;

  ngOnInit() {
    this.fetchVehicles();
  }

  fetchVehicles() {
    this.vehicles = [
      { id: 1, name: 'Vehicle 1', type: 'Truck', status: 'Active' },
      { id: 2, name: 'Vehicle 2', type: 'Sedan', status: 'Active' },
      { id: 3, name: 'Vehicle 3', type: 'Van', status: 'Inactive' },
    ];
  }

  showDetails(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }
}
