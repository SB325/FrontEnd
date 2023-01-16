interface User {
    readonly dbId: number,
    email: string, 
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

const sheldon: User = {dbId: 32, email: "sbish33@gmail.com", 
    userId: 3212, startTrial: () => {
        return "trail started"
    },
    getCoupon: (name: "sheldon", off: 20) => {
        return 10
    }
}



