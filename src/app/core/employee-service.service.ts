import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  users: Employee[] =[]
constructor( private http: HttpClient) { }
getUser(){
  for (let i = 1; i <= 100; i++) {
    this.users.push(createNewUser(i));
  }
  return this.users
}
// getUser() {
//   return this.http.get<any>('assets/employeeData.json')
  // .toPromise()
  // .then(res => <Employee[]>res.data)
  // .then(data => { console.log(data); return data; });
  
// }
getUserById(id :any){
  let user!: Employee;
  this.users.map(val=>{
    if(val.id == id) {
      user = val;
    }
  });
  return user;
}
userEdit(user:any){
  console.log(user)
  let present: Boolean = false;
  this.users.map((val, index)=>{
    if(val.id == user.id) {this.users[index] = user;
      present=true}
  });
  return present;

}

}
const NAMES = ['Maia','Asher','Olivia','Atticus','Amelia','Jack','Charlotte','Theodore','Isla','Oliver','Isabella','Jasper','Cora','Levi','Violet','Arthur','Mia','Thomas','Asep','Ridwan','Dimas','Denta',"Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"
];
const NAMES2 = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];
const SALARIES = [5000000, 5500000, 6000000, 6500000, 7000000, 7500000, 8000000, 8500000, 9000000, 9500000, 10000000]
const STATUSES = ["Single", "Maried" ] 
const groups = ["Kamboja", "Teratai", "Mawar", "Matahari", "Anggrek" ] 
function createNewUser(id: number): Employee {
  const gname = NAMES[Math.round(Math.random() * (NAMES.length - 1))]
  const gname2 = NAMES2[Math.round(Math.random() * (NAMES2.length - 1))]
  const gusername = gname + Math.round(Math.random() * 99).toString()
  const gsalary = SALARIES[Math.round(Math.random() * (SALARIES.length - 1))]
  const gDate = new Date(new Date(1990, 0, 1).getTime() + Math.random() * (new Date(2004, 0, 1).getTime() - new Date(1990, 0, 1).getTime()));
  const gStatus = STATUSES[Math.round(Math.random() * (STATUSES.length - 1))]
  const gGroup = groups[Math.round(Math.random() * (STATUSES.length - 1))]


  return {
    id: id,
    firstName: gname,
    lastName: gname2,
    username: gusername,
    email: gusername + "@gmail.com",
    birthDate: gDate ,
    basicSalary: gsalary,
    status: gStatus ,
    group: gGroup ,
    description: gDate

  }
}