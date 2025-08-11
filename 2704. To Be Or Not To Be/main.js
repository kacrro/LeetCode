const expect = (val) => ({
    toBe: (other) =>{
        if (other===val) return true;
        throw new Error("Not Equal");
    },
    notToBe: (other) => {
        if (other!==val) return true;
        throw new Error("Equal");
    }

});
