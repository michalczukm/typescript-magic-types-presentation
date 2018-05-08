type CakeFlavour = 'sweet' | 'more sweet'

interface Cake {
    flavour: CakeFlavour;
    calories: number;
}




















class CakeBuilder {
    protected cake = {} as Cake;

    withFlavour(flavour: CakeFlavour): this {
        this.cake.flavour = flavour;
        return this;
    }

    withCalories(calories: number): this {
        this.cake.calories = calories;
        return this;
    }
    
    build(): Cake {
        return this.cake;
    }
}

{
    const cake = new CakeBuilder()
        .withCalories(100)
        .withFlavour('sweet')
        .build();
}











//=============================================
// lets use polymorphic this











class BetterCakeBuilder extends CakeBuilder {
    withSuperFat(calories: number): this {
        this.cake.calories = calories * 100;
        return this;
    }
}


{
    const cake = new BetterCakeBuilder()
        .withSuperFat(500)
        .build;
}









// ==================================

// lets create even better builder with index types








class UlimateCakeBuilder {
    private cake = {} as Cake;

    withField<T extends keyof Cake>(field: keyof Cake, value: Cake[T]): this {
        this.cake[field] = value;
        return this;
    }
    
    build(): Cake {
        return this.cake;
    }
}




{
    const cake = new UlimateCakeBuilder()
        .withField('calories', 50)
        .withField('flavour', 'sweet')
        .build();
}










export default {};
