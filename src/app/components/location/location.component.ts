import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
// import "src/assets/images/mapImage.png";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit{
  allLocations : any = [];
  allCities : any = [];
  searchedLocation = "";
  constructor(private locationService: LocationsService){}

  ngOnInit(): void {
    this.getAllLocations();
  }

  // Service Call To Get All Locations
  getAllLocations(){
    this.locationService.getAllData().subscribe((res)=>{
      this.allLocations = res;
      this.allCities = [...this.allLocations];
    });

  }

  // Move Location Up Or Down based on Button Click
  moveLocation(location:any,index:any,moveUpDown:string){
      console.log(location, moveUpDown);
      if(moveUpDown === 'mt' && index>0){
        const tmp = this.allLocations[index - 1];
        this.allLocations[index - 1] = this.allLocations[index];
        this.allLocations[index] = tmp;
        console.log(this.allLocations);
          
      }
      if(moveUpDown === 'md' && index<this.allLocations.length-1){
        const tmp = this.allLocations[index + 1];
        this.allLocations[index + 1] = this.allLocations[index];
        this.allLocations[index] = tmp;
        console.log(this.allLocations);    
      }
  }

  // Search Location
  searchLocation(searchedLocation:any){
    this.allLocations = this.allLocations.filter((x:any )=> x === searchedLocation);
  }

  // Clear Search
  clearSearch(){
    this.searchedLocation = "";
    this.allLocations = [...this.allCities];
    
  }

}

