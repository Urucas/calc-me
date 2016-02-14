import calc from '../lib/';

describe("calc-me tests", () => {
  
  it("should add a number", (done) => {
    let x = calc(2, "+2");
    if(x != 4) 
      throw new Error("Addition error");
    done();
  });

  it("should add itself", (done) => {
    let x = calc(2, "+");
    if(x != 4) 
      throw new Error("Addition itself error");
    done();
  });

  it("should substract a number", (done) => {
    let x = calc(2, "-2");
    if(x != 0) 
      throw new Error("Substract error");
    done();
  });

  it("should create and array from the string", (done) => {
    let x = calc(2, "+2");
    if(x != 4) 
      throw new Error("Array creation from string error");
    done();
  });

  it("should substract itself", (done) => {
    let x = calc(2, "-");
    if(x != 0) 
      throw new Error("Substract itself error");
    done();
  });

  it("should multiply a number", (done) => {
    let x = calc(2, "*2");
    if(x != 4) 
      throw new Error("Multiply error");
    done();
  });

  it("should multiply itself", (done) => {
    let x = calc(2, "*");
    if(x != 4) 
      throw new Error("Multiply itself error");
    done();
  });

  it("should divide a number", (done) => {
    let x = calc(2, "/2");
    if(x != 1) 
      throw new Error("Divide error");
    done();
  });

  it("should divide itself", (done) => {
    let x = calc(2, "/2");
    if(x != 1) 
      throw new Error("Divide itself error");
    done();
  });

  it("should add, substract, multiple and divide a number", (done) => {
    let x = calc(2, "+2","-2","*2","/2");
    if(x != 2) 
      throw new Error("Multiple operations over a var error");
    done();
  });
  
  it("should add, substract, multiple and divide itself", (done) => {
    let x = calc(3, "+","-","*","/");
    if(!isNaN(x))
      throw new Error("Multiple operations over a var error");
    done();
  });
  
  it("should add 1", (done) => {
    let x = calc(2, "++");
    if(x != 3)
      throw new Error("Incremental error");
    done();
  });

  it("should substract 1", (done) => {
    let x = calc(2, "--");
    if(x != 1)
      throw new Error("Decremental error");
    done();
  });

  it("should divide a number by 0", (done) => {
    let x = calc(2, "/0");
    if(x != Infinity)
      throw new Error("Zero division error");
    done();
  });

  it("should divide NaN by 0", (done) => {
    let x = calc(NaN, "/0");
    if(!isNaN(x))
      throw new Error("Zero division error");
    done();
  });

});
