 class Utils {
    randomColor() {
        let color_min = 100;
        let color_ceil = 155;
        
        let r1 = Math.random() * color_ceil + color_min;
        let r2 = Math.random() * color_ceil + color_min;
        let r3 = Math.random() * color_ceil + color_min;

        return `rgb(${r1}, ${r2}, ${r3})`
    }
}

export default new Utils();