import os from "node:os"
function monitor() {
    console.log('MONITORING...')
    const oldCPU = os.cpus();
    setTimeout(() => {
        const newCPU = os.cpus()
        const usage = newCPU.map((core, index) => {
            return {
                CORE: index + 1,
                USAGE: CalcUsage(oldCPU[index], newCPU[index]) + "%"
            }
        })
        const USED_MEMORY = (os.totalmem() - os.freemem()) / (1024 ** 3)
        console.clear()
        console.table(usage)
        console.log("MEMORY IN CONSUMPTION: " + USED_MEMORY.toFixed(2) + " GB")
        console.log("TOTAL MEMORY: " + ((os.totalmem())/1024**3).toFixed(2) + " GB")
    }, 1000);


}
function CalcUsage(oldCPU, newCPU) {
    const OLD_TOTAL = Object.values(oldCPU.times).reduce((a, b) => a + b);
    const NEW_TOTAL = Object.values(newCPU.times).reduce((a, b) => a + b);
    const TOTAL = NEW_TOTAL - OLD_TOTAL;
    const IDLE = newCPU.times.idle - oldCPU.times.idle
    const USED = TOTAL - IDLE;
    return ((100 * USED) / 100).toFixed(2)
}
setInterval(monitor, 1000)
