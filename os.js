import os from 'node:os';
const CPUS = os.cpus()
// console.log("CPUS:", CPUS) // ARRAY OF CPU CORES
console.log("CPUS:", CPUS.length) // 12
console.log("Total memory: " + os.totalmem() / (1024 * 1024 * 1024) + " GB")
console.log("Free memory: " + os.freemem() / (1024 * 1024) + " MB")
console.log("Uptime: " + os.uptime() / (60 * 60));
console.log("Hostname: " + os.hostname()); //LAPTOP-9MBL1O4G
console.log("UserInfo: " + os.userInfo());
console.log("Machine: " + os.machine());
console.log("Machine: " + os.arch())
console.log("Machine: " + os.uptime())
console.log("Machine: " + os.networkInterfaces())
console.log("Machine: " + os.devNull)
// CPUS: [
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 228328, nice: 0, sys: 244093, idle: 7578125, irq: 24218 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 120421, nice: 0, sys: 96140, idle: 7833984, irq: 1937 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 186281, nice: 0, sys: 143937, idle: 7720343, irq: 1234 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 153328, nice: 0, sys: 90437, idle: 7806687, irq: 937 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 130562, nice: 0, sys: 106890, idle: 7813000, irq: 968 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 87468, nice: 0, sys: 76796, idle: 7886171, irq: 718 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 96156, nice: 0, sys: 69359, idle: 7884937, irq: 593 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 79484, nice: 0, sys: 63921, idle: 7907031, irq: 453 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 98265, nice: 0, sys: 77875, idle: 7874312, irq: 1625 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 54437, nice: 0, sys: 39437, idle: 7956578, irq: 515 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 66296, nice: 0, sys: 46156, idle: 7938000, irq: 468 }
//     },
//     {
//       model: 'AMD Ryzen 5 5600H with Radeon Graphics         ',
//       speed: 3294,
//       times: { user: 53890, nice: 0, sys: 83609, idle: 7912953, irq: 1468 }
//     }
//   ]