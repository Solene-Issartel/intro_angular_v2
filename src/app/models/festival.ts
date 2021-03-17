import { Optional } from "@angular/core";



export class Festival {
  static sqmTable = 6;

  public id?: string;
  public name!: string;
  public tablemax_1: number;
  public tableprice_1: number;
  public sqmprice_1: number;
  public tablebooked_1: number = 0;
  public sqmbooked_1: number = 0;
  public tablemax_2: number;
  public tableprice_2: number;
  public sqmprice_2: number;
  public tablebooked_2: number = 0;
  public sqmbooked_2: number = 0;
  public tablemax_3: number;
  public tableprice_3: number;
  public sqmprice_3: number;
  public tablebooked_3: number = 0;
  public sqmbooked_3: number = 0;
  public revenue: number = 0;
  public visitor: boolean = false;

  public get tableTotal() : number { return this.tablemax_1 + this.tablemax_2 + this.tablemax_3; }

  public
  constructor(
    name: string,
    @Optional() id?: string,
    @Optional() entranceLoc?: number,  // première partie de salle
    @Optional() mainRoomLoc?: number,   // deuxième partie de salle
    @Optional() cafetLoc?: number, // étage de la buvette
    @Optional() entrancePrice?: number,
    @Optional() mainRoomPrice?: number,
    @Optional() cafetPrice?: number,
    @Optional() entranceSqm?: number,
    @Optional() mainRoomSqm?: number,
    @Optional() cafetSqm?: number,
    @Optional() entranceTableBooked? : number,
    @Optional() mainRoomTableBooked? : number,
    @Optional() cafetTableBooked? : number,
    @Optional() entranceSqmBooked? : number,
    @Optional() mainRoomSqmBooked? : number,
    @Optional() cafetSqmBooked? : number,
    @Optional() revenue?: number,
    @Optional() visitor?: boolean
  ){
    this.name = name;
    this.id = id;
    this.tablemax_1 = (entranceLoc == null) ? 64 : entranceLoc;
    this.tablemax_2 = (mainRoomLoc == null) ? 72 : mainRoomLoc;
    this.tablemax_3 = (cafetLoc == null) ? 40 : cafetLoc;
    this.tableprice_1 = (entrancePrice == null) ? 110 : entrancePrice;
    this.tableprice_2 = (mainRoomPrice == null) ? 100 : mainRoomPrice;
    this.tableprice_3 = (cafetPrice == null) ? 90 : cafetPrice;
    this.sqmprice_1 = (entranceSqm == null) ? Math.round((this.tableprice_1 / Festival.sqmTable) * 10) / 10 : entranceSqm;
    this.sqmprice_2 = (mainRoomSqm == null) ? Math.round((this.tableprice_2 / Festival.sqmTable) * 10) / 10 : mainRoomSqm;
    this.sqmprice_3 = (cafetSqm == null) ? Math.round((this.tableprice_3 / Festival.sqmTable) * 10) / 10 : cafetSqm;
    this.tablebooked_1 = (entranceTableBooked == null) ? 0 : entranceTableBooked;
    this.tablebooked_2 = (mainRoomTableBooked == null) ? 0 : mainRoomTableBooked;
    this.tablebooked_3 = (cafetTableBooked == null) ? 0 : cafetTableBooked;
    this.sqmbooked_1 = (entranceSqmBooked == null) ? 0 : entranceSqmBooked;
    this.sqmbooked_2 = (mainRoomSqmBooked == null) ? 0 : mainRoomSqmBooked;
    this.sqmbooked_3 = (cafetSqmBooked == null) ? 0 : cafetSqmBooked;
    this.revenue = (revenue == null) ? 0 : revenue;
    this.visitor = (visitor == null) ? false : visitor
  }
}
