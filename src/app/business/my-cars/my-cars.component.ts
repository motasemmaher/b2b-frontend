import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { CarsService } from "./service/cars.service";
@Component({
  selector: "app-my-cars",
  templateUrl: "./my-cars.component.html",
  styleUrls: ["./my-cars.component.scss"],
})
export class MyCarsComponent implements OnInit {
  disableButtonSave: boolean = true;
  addNewCarFormGroup: FormGroup;
  disableAddNewCarBtn: boolean = true;
  myCars: FormGroup;
  constructor(private carsService: CarsService) {
    this.getMyCars();
    this.manageAddNewCar();
  }

  ngOnInit(): void {}

  getMyCars() {
    this.carsService.getMyCars().subscribe((res) => {
      this.manageMyCars(res);
    });
  }

  manageMyCars(cars: any[]) {
    this.myCars = new FormGroup({ cars: new FormArray([]) });
    cars.forEach((car) => {
      (this.myCars.get("cars") as FormArray).push(
        new FormGroup({
          carId: new FormControl(car._id),
          model: new FormControl(
            car.model,
            Validators.compose([
              Validators.minLength(8),
              Validators.maxLength(100),
              Validators.pattern(/(^[A-Z a-z \d ']{2,24}$)/),
              Validators.required,
            ])
          ),
          make: new FormControl(
            car.make,
            Validators.compose([
              Validators.minLength(8),
              Validators.maxLength(100),
              Validators.pattern(/(^[A-Z a-z \s\d-']{3,24}$)/),
              Validators.required,
            ])
          ),
          year: new FormControl(
            car.year,
            Validators.compose([Validators.required])
          ),
          isEditing: new FormControl(false),
        })
      );
    });
  }
  manageAddNewCar() {
    this.addNewCarFormGroup = new FormGroup({
      model: new FormControl(
        "",
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.pattern(/(^[A-Z a-z \d ']{2,24}$)/),
          Validators.required,
        ])
      ),
      make: new FormControl(
        "",
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.pattern(/(^[A-Z a-z \s\d-']{3,24}$)/),
          Validators.required,
        ])
      ),
      year: new FormControl(
        "",
        Validators.compose([
          // Validators.pattern(/(^[\d']{4}$)/),
          Validators.required,
        ])
      ),
    });
    this.listenOnAddNewCarBtn();
  }

  listenOnAddNewCarBtn() {
    this.addNewCarFormGroup.valueChanges.subscribe(() => {
      if (this.addNewCarFormGroup.valid) {
        this.disableAddNewCarBtn = false;
      } else {
        this.disableAddNewCarBtn = true;
      }
    });
  }

  manipulateDataBeforeSendingForYear(data): any {
    data.year = "" + new Date(data.year.toString()).getFullYear();
    return data;
  }

  addCar() {
    if (this.addNewCarFormGroup.valid) {
      this.carsService
        .addNewCar(
          this.manipulateDataBeforeSendingForYear(
            this.addNewCarFormGroup.value
          )
        )
        .subscribe(() => {
          this.disableAddNewCarBtn = true;
          this.manageAddNewCar();
          this.getMyCars();
        });
    }
  }
  
  saveEditedCar(index) {
    const { carId } = (this.myCars.get("cars") as FormArray).at(index).value;
    const info = (this.myCars.get("cars") as FormArray).at(index).value;
    const data = {
      make: info.make,
      model: info.model,
      year: info.year,
    }
    this.carsService.editCar(carId, this.manipulateDataBeforeSendingForYear(data)).subscribe(() => {
      this.getMyCars();
    });
  }
  
  editCar(index) {
    (this.myCars.get("cars") as FormArray).at(index).get('isEditing').setValue(true);
  }
  deleteCar(index) {
    const { carId } = (this.myCars.get("cars") as FormArray).at(index).value;
    this.carsService.deleteCar(carId).subscribe(() => {
      (this.myCars.get("cars") as FormArray).removeAt(index);
    });
  }
}
