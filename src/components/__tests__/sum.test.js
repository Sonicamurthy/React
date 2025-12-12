import { sum } from "../sum"

test("adding 2 numbers",()=>{
    const res=sum(3,7)

    expect(res).toBe(10);
})