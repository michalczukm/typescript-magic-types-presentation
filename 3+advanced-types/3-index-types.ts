function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

type Person = {
    name: string,
    age: number
}
let person: Person = {
    name: 'Jarid',
    age: 35
};

let ageValues: number[] = pluck(person, ['age']);














// One more example in file 9!

















// ------------------------------------------------------------
// how to deal with reactive forms in Angular - how to make them strong typed!
import {AbstractControl, FormArray, FormGroup, ValidationErrors} from '@angular/forms';

export type FormStrongTypedExample = {
    field: AbstractControl,
    anotherField: AbstractControl,
    theArrayField: FormArray
};

function createReadonlyForm<TForm>(form: FormGroup): {[K in keyof TForm]: AbstractControl & FormArray & FormGroup} {
    return Object.keys(form.controls).reduce((result, key) => {
        result[key] = form.controls[key];
        return result;
    }, Object.create(null)) as {[K in keyof TForm]: AbstractControl & FormArray & FormGroup};
}

@Component({
    //...
})
class FooComponent implements OnInit {
    form: FormGroup;

    ngOnInit(): void {
        const readonlyTypedForm: FormStrongTypedExample = createReadonlyForm<FormStrongTypedExample>(this.form);
    }
}
