import { Component, OnInit , Input} from '@angular/core';
import { Pet } from '../pet.model';
import { PetService} from '../pet.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],

})
export class PetComponent implements OnInit {

  title = 'MASCOTAS';


  data: Observable<Pet[]>;
  pets: Pet[];
  // razas: Raza[];
  razas: any;
  selectedPet: Pet;
  // @Input() pet: Pet;


  constructor(private petService: PetService) {

  }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }


  getPets1(): void {
    this.data = this.petService.getPets();
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }

  add(nombre: string, edad: string, Raza_idRaza: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    const newPet: Pet = {
      _id: 0,
      name: nombre,
      age: edad,
      clasification: 'dog',
      race: 'race',
      genre: 'femal',
      user_id: '5af0656afbc28903b23a4fd4'


    };
    this.petService.addPet(newPet )
      .subscribe(pet => {
        this.pets.push(pet); // location.reload();
      });
  }

  delete(pet: Pet): void {
    if (confirm('Are you sure you want to delete it?')) {
    this.pets = this.pets.filter(p => p !== pet);
    this.petService.deletePet(pet).subscribe();
    }
  }











}


