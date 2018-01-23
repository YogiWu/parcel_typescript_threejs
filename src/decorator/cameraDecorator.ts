export default (...args:Number[]) => {
    enum Position{
        x,
        y,
        z
    }
    // if (!target.position) {
    //     throw new Error("target has not position property")
    //     return
    // }
    return (target: {position: object}) => {
        
    }
}