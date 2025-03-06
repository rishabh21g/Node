import chalk from "chalk";
import os from "node:os";

function monitor() {
    const oldCPU = os.cpus();

    setTimeout(() => {
        const newCPU = os.cpus();
        const usage = newCPU.map((core, index) => {
            return {
                CORE: index + 1,
                USAGE: CalcUsage(oldCPU[index], newCPU[index]) + "%"
            };
        });

        const USED_MEMORY = (os.totalmem() - os.freemem()) / (1024 ** 3);
        const TOTAL_MEMORY = os.totalmem() / (1024 ** 3);

        console.clear();
        console.log(chalk.bgCyan("======== SYSTEM INFORMATION ========="));
        console.log();
        console.log(chalk.bgRed(`========= ${os.hostname()} =========`));
        console.table(usage);
        
        console.log("MEMORY IN CONSUMPTION: " + 
            (USED_MEMORY > 4 ? chalk.green(USED_MEMORY.toFixed(2)) : chalk.redBright(USED_MEMORY.toFixed(2))) + " GB"
        );
        
        console.log("TOTAL MEMORY: " + chalk.gray(TOTAL_MEMORY.toFixed(2)) + " GB");
    }, 1000);
}

function CalcUsage(oldCPU, newCPU) {
    const OLD_TOTAL = Object.values(oldCPU.times).reduce((a, b) => a + b);
    const NEW_TOTAL = Object.values(newCPU.times).reduce((a, b) => a + b);
    const TOTAL = NEW_TOTAL - OLD_TOTAL;
    const IDLE = newCPU.times.idle - oldCPU.times.idle;
    const USED = TOTAL - IDLE;
    
    return ((USED / TOTAL) * 100).toFixed(2); 
}

setInterval(monitor, 1000);
