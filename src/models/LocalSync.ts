// interface HasId {
//   id?: number;
// }

// export class LocalSync<T extends HasId> {
//   constructor(public localStorageItemName: string) {}

//   fetch(id: number): Promise<T> {
//     return new Promise((resolve, reject) => {
//       const users = JSON.parse(localStorage.getItem(this.localStorageItemName));
//       if (users) {
//         const user = users.find((user: T) => user.id === id);
//         if (user) {
//           resolve(user);
//         } else {
//         //   reject(`No user with id ${id} has been found in local storage.`);
//         }
//       } else {
//         // reject('No local storage item with specified item name exists.');
//       }
//     });
//   }

//   save(data: T): Promise<T> {
//     return new Promise((resolve, reject) => {
//       const { id } = data;
//       const users: T[] = JSON.parse(
//         localStorage.getItem(this.localStorageItemName)
//       );

//       // If ID exists
//       if (id) {
//           // If there are Users in LS
//         if (users) {
//           const userIndex = users.findIndex((user: T) => user.id === id);
//           if (userIndex !== -1) {
//             users[userIndex] = {
//               ...users[userIndex],
//               ...data
//             };
//             localStorage.setItem(
//               this.localStorageItemName,
//               JSON.stringify(users)
//             );
//             resolve(users[userIndex]);
//           } else {
//             // reject(`No user with id ${id} has been found in local storage.`);
//           }
//         } 
//         // If no Users in LS
//         else {
//         //   reject(
//         //     `Local storage with item name ${this.localStorageItemName} is currently empty.`
//         //   );
//         }
//       } 
      
//       // If NO ID - CREATE new
//       else {
//         if (users && users.length) {
//           const id = users[users.length - 1].id + 1;
//           const dataWithId = {
//             ...data,
//             id
//           };
//           users.push(dataWithId);
//           localStorage.setItem(
//             this.localStorageItemName,
//             JSON.stringify(users)
//           );
//           resolve(dataWithId);
//         } else {
//           const dataWithId = {
//             ...data,
//             id: 1
//           };
//           localStorage.setItem(
//             this.localStorageItemName,
//             JSON.stringify([dataWithId])
//           );
//           resolve(dataWithId);
//         }
//       }
//     });
//   }
// }
