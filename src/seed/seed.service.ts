import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {

  constructor( 
    private readonly  carsService: CarsService,
    private readonly brandsService: BrandsService 
  ){

  }

  populateDb(){

    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED);

    return 'Seed executed';
  }
}
